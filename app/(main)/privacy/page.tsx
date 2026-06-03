import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Tashkelah',
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm">Last updated: May 2025</p>
      </div>

      <Section title="1. Who We Are">
        <p>
          Tashkelah is a UAE-based platform that helps diners discover exclusive walk-in offers from restaurants
          and cafés across the Emirates. When we say "Tashkelah", "we", "us" or "our", we mean the team operating
          this platform.
        </p>
      </Section>

      <Section title="2. What We Collect">
        <p>We collect only what is necessary to run the service:</p>
        <ul>
          <li><strong>Account data</strong> — your name and email address when you register.</li>
          <li><strong>Usage data</strong> — which restaurants and deals you save or view.</li>
          <li><strong>Contact messages</strong> — if you reach out via our contact form.</li>
        </ul>
        <p>We do not collect payment information, location data, or any data beyond what is listed above.</p>
      </Section>

      <Section title="3. How We Use Your Data">
        <ul>
          <li>To create and manage your account.</li>
          <li>To save your bookmarked restaurants across sessions.</li>
          <li>To respond to your enquiries.</li>
          <li>To understand how the platform is used so we can improve it.</li>
        </ul>
        <p>We will never sell your personal data to third parties.</p>
      </Section>

      <Section title="4. Data Storage">
        <p>
          Your data is stored securely using Supabase, a cloud database provider with servers in the EU.
          All data is encrypted in transit (HTTPS) and at rest.
        </p>
      </Section>

      <Section title="5. Cookies">
        <p>
          We use a single session cookie to keep you logged in. We do not use advertising cookies,
          analytics cookies, or any third-party tracking cookies.
        </p>
      </Section>

      <Section title="6. Your Rights">
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your account and associated data.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at the email below and we will respond within 7 days.
        </p>
      </Section>

      <Section title="7. Data Retention">
        <p>
          We retain your data for as long as your account is active. If you delete your account,
          all associated personal data is permanently removed within 30 days.
        </p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>
          We may update this policy from time to time. We will notify registered users of any
          significant changes via email. Continued use of the platform after changes are posted
          constitutes acceptance.
        </p>
      </Section>

      <Section title="9. Contact">
        <p>
          For any privacy-related questions, please reach out through our{' '}
          <a href="/list-your-restaurant" className="text-primary underline underline-offset-2 hover:opacity-80">
            contact page
          </a>
          .
        </p>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-2 text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-foreground [&_strong]:font-medium">
        {children}
      </div>
    </section>
  )
}
