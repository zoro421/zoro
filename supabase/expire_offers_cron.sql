-- Auto-expire offers: flip is_active = false when valid_until has passed
-- Run this once in the Supabase SQL Editor (as postgres / superuser)

-- 1. Enable pg_cron (safe to run if already enabled)
create extension if not exists pg_cron;

-- 2. Function that expires overdue offers
create or replace function expire_offers()
returns void
language sql
security definer
set search_path = public
as $$
  update offers
  set    is_active = false
  where  valid_until is not null
    and  valid_until < current_date
    and  is_active = true;
$$;

-- 3. Schedule: runs every day at 20:00 UTC = 00:00 GST (midnight UAE time)
select cron.schedule(
  'expire-offers-daily',   -- job name (unique key)
  '0 20 * * *',            -- cron: 20:00 UTC = midnight GST
  $$ select expire_offers(); $$
);
