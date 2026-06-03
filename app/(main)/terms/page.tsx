import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Tashkelah',
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground text-sm">Last updated: May 2025</p>
      </div>

      <Section title="1. Acceptance">
        <p>
          By creating an account or using Tashkelah, you agree to these Terms of Service.
          If you do not agree, please do not use the platform.
        </p>
      </Section>

      <Section title="2. What Tashkelah Is">
        <p>
          Tashkelah is an online directory that lists walk-in dining offers from restaurants and cafés
          across the UAE. We curate and publish offers on behalf of partner restaurants.
          We are not a booking platform and no reservation or payment is processed through this site.
        </p>
      </Section>

      <Section title="3. Accuracy of Offers">
        <p>
          We make every effort to ensure that listed offers are accurate and up to date. However,
          restaurant offers are subject to change without notice. Tashkelah is not responsible for
          any discrepancy between a listed offer and what a restaurant provides on the day of your visit.
        </p>
        <p>
          We strongly recommend confirming deal availability with the restaurant directly before visiting.
        </p>
      </Section>

      <Section title="4. Your Account">
        <ul>
          <li>You must be at least 18 years old to create an account.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You must not share your account with others or use another person's account.</li>
          <li>You must provide accurate information when registering.</li>
        </ul>
      </Section>

      <Section title="5. Acceptable Use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the platform for any unlawful purpose.</li>
          <li>Attempt to scrape, copy, or reproduce content without permission.</li>
          <li>Interfere with or disrupt the platform or its servers.</li>
          <li>Post or transmit any harmful, offensive, or misleading content.</li>
        </ul>
      </Section>

      <Section title="6. Intellectual Property">
        <p>
          All content on Tashkelah — including text, logos, and design — is owned by or licensed to
          Tashkelah. You may not reproduce or distribute it without our prior written consent.
          Restaurant names, logos, and images remain the property of their respective owners.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>
          Tashkelah is provided "as is" without warranties of any kind. To the fullest extent permitted
          by UAE law, we are not liable for any indirect, incidental, or consequential damages arising
          from your use of the platform or your reliance on any listed offer.
        </p>
      </Section>

      <Section title="8. Account Termination">
        <p>
          We reserve the right to suspend or permanently delete accounts that violate these terms,
          engage in fraudulent activity, or misuse the platform. You may also delete your account
          at any time by contacting us.
        </p>
      </Section>

      <Section title="9. Changes to These Terms">
        <p>
          We may update these terms periodically. Continued use of the platform after changes
          are posted constitutes your acceptance of the updated terms. We will notify users of
          material changes via email.
        </p>
      </Section>

      <Section title="10. Governing Law">
        <p>
          These terms are governed by the laws of the United Arab Emirates.
          Any disputes shall be subject to the exclusive jurisdiction of the courts of the UAE.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          For any questions about these terms, reach out through our{' '}
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
