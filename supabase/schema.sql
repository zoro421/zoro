-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles (extends Supabase auth.users)
create table profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now()
);

-- Restaurants
create table restaurants (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text,
  cuisine_type text,
  emirate text,
  address text,
  google_maps_url text,
  phone text,
  instagram text,
  cover_image_url text,
  logo_url text,
  gallery_urls text[] default '{}',
  gallery_items jsonb default '[]',
  dining_type text[] default '{}',
  listing_package text not null default 'basic' check (listing_package in ('basic', 'premium')),
  is_approved boolean not null default false,
  is_active boolean not null default true,
  owner_id uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Offers
create table offers (
  id uuid primary key default uuid_generate_v4(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  title text not null,
  description text,
  deal_type text not null default 'percentage' check (deal_type in ('percentage', 'fixed', 'bogo', 'set_menu', 'other')),
  discount_percentage int check (discount_percentage >= 0 and discount_percentage <= 100),
  valid_from date,
  valid_until date,
  terms text,
  image_url text,
  is_approved boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Listing subscriptions (monetization)
create table listing_subscriptions (
  id uuid primary key default uuid_generate_v4(),
  restaurant_id uuid not null references restaurants(id) on delete cascade,
  amount_aed numeric(10, 2) not null,
  starts_at date not null,
  ends_at date not null,
  status text not null default 'active' check (status in ('active', 'expired', 'cancelled')),
  payment_ref text,
  created_at timestamptz not null default now()
);

-- Indexes for performance
create index restaurants_emirate_idx on restaurants(emirate);
create index restaurants_cuisine_idx on restaurants(cuisine_type);
create index restaurants_is_approved_idx on restaurants(is_approved, is_active);
create index offers_restaurant_id_idx on offers(restaurant_id);
create index offers_is_approved_idx on offers(is_approved, is_active);
create index offers_valid_until_idx on offers(valid_until);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger restaurants_updated_at before update on restaurants
  for each row execute function update_updated_at();

create trigger offers_updated_at before update on offers
  for each row execute function update_updated_at();

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, full_name)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- Row Level Security
alter table profiles enable row level security;
alter table restaurants enable row level security;
alter table offers enable row level security;
alter table listing_subscriptions enable row level security;

-- Profiles: users read own row only; admins read all; users update own
create policy "profiles_select_own" on profiles for select using (auth.uid() = id);
create policy "profiles_select_admin" on profiles for select using (
  exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
);
create policy "profiles_update_own" on profiles for update using (auth.uid() = id);

-- Restaurants: anyone can view approved+active, admins see all
create policy "restaurants_public_select" on restaurants
  for select using (is_approved = true and is_active = true);

create policy "restaurants_admin_select" on restaurants
  for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "restaurants_admin_all" on restaurants
  for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Offers: anyone can view approved+active offers on approved+active restaurants
create policy "offers_public_select" on offers
  for select using (
    is_approved = true and is_active = true and
    exists (
      select 1 from restaurants r
      where r.id = restaurant_id and r.is_approved = true and r.is_active = true
    )
  );

create policy "offers_admin_all" on offers
  for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Listing subscriptions: admins only
create policy "subscriptions_admin" on listing_subscriptions
  for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Seed: create first admin (run this manually after creating your account)
-- update profiles set role = 'admin' where id = 'your-user-uuid';

-- Announcements (banner bar below navbar)
create table announcements (
  id uuid primary key default uuid_generate_v4(),
  message text not null,
  link_url text,
  link_label text,
  is_active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table announcements enable row level security;

create policy "announcements_public_select" on announcements
  for select using (is_active = true);

create policy "announcements_admin_all" on announcements
  for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- View tracking
alter table restaurants add column if not exists view_count integer not null default 0;
create index if not exists restaurants_view_count_idx on restaurants(view_count desc);

create or replace function increment_restaurant_views(rid uuid)
returns void
language plpgsql
security definer
as $$
begin
  update restaurants
  set view_count = view_count + 1
  where id = rid and is_approved = true and is_active = true;
end;
$$;

grant execute on function increment_restaurant_views(uuid) to anon;
