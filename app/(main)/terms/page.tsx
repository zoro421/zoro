import type { Metadata } from 'next'
import { BRAND } from '@/lib/brand'

export const metadata: Metadata = {
  title: `Terms of Service — ${process.env.NEXT_PUBLIC_APP_NAME}`,
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground text-sm">Last updated: June 2026</p>
      </div>

      <Section title="1. Acceptance">
        <p>
          By accessing or using {BRAND.name}, you agree to these Terms of Service.
          If you do not agree, please do not use the platform.
        </p>
      </Section>

      <Section title={`2. What ${BRAND.name} Is`}>
        <p>
          {BRAND.name} is an online directory that lists walk-in dining offers from restaurants and cafés
          across the UAE. We curate and publish offers on behalf of partner restaurants.
          We are not a booking platform and no reservation or payment is processed through this site.
        </p>
      </Section>

      <Section title="3. Accuracy of Offers">
        <p>
          We make every effort to ensure that listed offers are accurate and up to date. However,
          restaurant offers are subject to change without notice. {BRAND.name} is not responsible for
          any discrepancy between a listed offer and what a restaurant provides on the day of your visit.
        </p>
        <p>
          We strongly recommend confirming deal availability with the restaurant directly before visiting.
        </p>
      </Section>

      <Section title="4. Acceptable Use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the platform for any unlawful purpose.</li>
          <li>Attempt to scrape, copy, or reproduce content without permission.</li>
          <li>Interfere with or disrupt the platform or its servers.</li>
          <li>Post or transmit any harmful, offensive, or misleading content.</li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p>
          All content on {BRAND.name} — including text, logos, and design — is owned by or licensed to
          {' '}{BRAND.name}. You may not reproduce or distribute it without our prior written consent.
          Restaurant names, logos, and images remain the property of their respective owners.
        </p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p>
          {BRAND.name} is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted
          by UAE law, we are not liable for any indirect, incidental, or consequential damages arising
          from your use of the platform or your reliance on any listed offer.
        </p>
      </Section>

      <Section title="7. Changes to These Terms">
        <p>
          We may update these terms periodically. Continued use of the platform after changes
          are posted constitutes your acceptance of the updated terms.
        </p>
      </Section>

      <Section title="8. Governing Law">
        <p>
          These terms are governed by the laws of the United Arab Emirates.
          Any disputes shall be subject to the exclusive jurisdiction of the courts of the UAE.
        </p>
      </Section>

      <Section title="9. Contact">
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
