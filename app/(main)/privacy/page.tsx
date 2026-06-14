import type { Metadata } from 'next'
import { BRAND } from '@/lib/brand'

export const metadata: Metadata = {
  title: `Privacy Policy — ${process.env.NEXT_PUBLIC_APP_NAME}`,
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm">Last updated: June 2026</p>
      </div>

      <Section title="1. Who We Are">
        <p>
          {BRAND.name} is a UAE-based platform that helps diners discover exclusive walk-in offers from restaurants
          and cafés across the Emirates. When we say &ldquo;{BRAND.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;, we mean the team operating
          this platform.
        </p>
      </Section>

      <Section title="2. What We Collect">
        <p>We collect only what is necessary to run the service:</p>
        <ul>
          <li><strong>Usage data</strong> — which pages you visit and how you interact with the site (only if you consent to analytics cookies).</li>
          <li><strong>Contact messages</strong> — if you reach out via our contact form.</li>
        </ul>
        <p>
          We do not collect payment information, location data, or any personally identifiable information (PII)
          such as your name, email address, phone number, or physical address through analytics.
        </p>
      </Section>

      <Section title="3. Google Analytics">
        <p>
          This website uses <strong>Google Analytics 4 (GA4)</strong> to collect anonymous usage statistics.
          Google Analytics helps us understand how visitors use our site so we can improve your experience.
        </p>
        <p>Google Analytics collects:</p>
        <ul>
          <li>Pages visited and time spent on each page</li>
          <li>General device and browser information (e.g. screen size, browser type)</li>
          <li>Approximate country or region (not precise location)</li>
          <li>How you arrived at the site (e.g. search engine, direct link)</li>
        </ul>
        <p>
          <strong>We do not send any personally identifiable information to Google Analytics.</strong>{' '}
          IP anonymisation is enabled, and advertising features and Google Signals are disabled.
        </p>
        <p>
          Google Analytics may use cookies and similar technologies to collect this data.
          You can learn how Google processes data at:{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:opacity-80"
          >
            policies.google.com/technologies/partner-sites
          </a>
        </p>
        <p>
          Google Analytics is only loaded <strong>after you give consent</strong> via the cookie banner.
          If you decline or withdraw consent, no analytics data is collected.
        </p>
      </Section>

      <Section title="4. Cookies">
        <p>We use the following cookies:</p>
        <ul>
          <li>
            <strong>ga-consent</strong> — stores your cookie preference (&ldquo;accepted&rdquo; or &ldquo;declined&rdquo;).
            This is a functional cookie required to remember your choice and does not track you.
          </li>
          <li>
            <strong>Google Analytics cookies (_ga, _ga_*)</strong> — set only if you accept analytics cookies.
            These collect anonymous usage data as described above.
          </li>
        </ul>
        <p>
          If you decline, Google Analytics still receives anonymous, cookieless signals that Google uses
          to produce aggregated traffic estimates. No cookies are stored on your device in this case.
        </p>
      </Section>

      <Section title="5. Your Cookie Choices">
        <p>
          On your first visit, a cookie banner gives you the choice to accept or decline analytics cookies.
          You can change your preference at any time by clicking <strong>Cookie Preferences</strong> in
          the footer of any page.
        </p>
        <p>
          You can also opt out of Google Analytics across all websites by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:opacity-80"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
      </Section>

      <Section title="6. How We Use Your Data">
        <ul>
          <li>To understand how the platform is used so we can improve it.</li>
          <li>To respond to your enquiries.</li>
        </ul>
        <p>We will never sell your data to third parties.</p>
      </Section>

      <Section title="7. Your Rights">
        <p>You have the right to:</p>
        <ul>
          <li>Decline or withdraw consent for analytics cookies at any time.</li>
          <li>Request information about the data we hold.</li>
          <li>Request deletion of any data associated with you.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at the email below and we will respond within 7 days.
        </p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>
          We may update this policy from time to time. Continued use of the platform after changes are posted
          constitutes acceptance. The date at the top of this page shows when it was last updated.
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
