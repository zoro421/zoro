'use client'

import { useLang } from '@/lib/language-context'
import { BRAND } from '@/lib/brand'

function Section({ title, children, rtl }: { title: string; children: React.ReactNode; rtl?: boolean }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-2 text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-foreground [&_strong]:font-medium" dir={rtl ? 'rtl' : undefined}>
        {children}
      </div>
    </section>
  )
}

const en = (brand: string) => ({
  title: 'Terms of Service',
  updated: 'Last updated: June 2026',
  sections: [
    {
      heading: '1. Acceptance',
      body: <p>By accessing or using {brand}, you agree to these Terms of Service. If you do not agree, please do not use the platform.</p>,
    },
    {
      heading: `2. What ${brand} Is`,
      body: <p>{brand} is an online directory that lists walk-in dining offers from restaurants and cafés across the UAE. We curate and publish offers on behalf of partner restaurants. We are not a booking platform and no reservation or payment is processed through this site.</p>,
    },
    {
      heading: '3. Accuracy of Offers',
      body: <>
        <p>We make every effort to ensure that listed offers are accurate and up to date. However, restaurant offers are subject to change without notice. {brand} is not responsible for any discrepancy between a listed offer and what a restaurant provides on the day of your visit.</p>
        <p>We strongly recommend confirming deal availability with the restaurant directly before visiting.</p>
      </>,
    },
    {
      heading: '4. Acceptable Use',
      body: <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the platform for any unlawful purpose.</li>
          <li>Attempt to scrape, copy, or reproduce content without permission.</li>
          <li>Interfere with or disrupt the platform or its servers.</li>
          <li>Post or transmit any harmful, offensive, or misleading content.</li>
        </ul>
      </>,
    },
    {
      heading: '5. Intellectual Property',
      body: <p>All content on {brand} — including text, logos, and design — is owned by or licensed to {brand}. You may not reproduce or distribute it without our prior written consent. Restaurant names, logos, and images remain the property of their respective owners.</p>,
    },
    {
      heading: '6. Limitation of Liability',
      body: <p>{brand} is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by UAE law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the platform or your reliance on any listed offer.</p>,
    },
    {
      heading: '7. Changes to These Terms',
      body: <p>We may update these terms periodically. Continued use of the platform after changes are posted constitutes your acceptance of the updated terms.</p>,
    },
    {
      heading: '8. Governing Law',
      body: <p>These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of the UAE.</p>,
    },
    {
      heading: '9. Contact',
      body: <p>For any questions about these terms, reach out through our <a href="/list-your-restaurant" className="text-primary underline underline-offset-2 hover:opacity-80">contact page</a>.</p>,
    },
  ],
})

const ar = (brand: string) => ({
  title: 'شروط الخدمة',
  updated: 'آخر تحديث: يونيو 2026',
  sections: [
    {
      heading: '١. القبول',
      body: <p>بالوصول إلى منصة {brand} أو استخدامها، فإنك توافق على شروط الخدمة هذه. إذا كنت لا توافق عليها، يُرجى عدم استخدام المنصة.</p>,
    },
    {
      heading: `٢. ما هي ${brand}`,
      body: <p>{brand} هي دليل إلكتروني يعرض عروض الدخول المباشر من المطاعم والمقاهي في جميع أنحاء الإمارات العربية المتحدة. نقوم بتنظيم ونشر العروض نيابةً عن المطاعم الشريكة. نحن لسنا منصة حجز، ولا تتم معالجة أي حجز أو دفع عبر هذا الموقع.</p>,
    },
    {
      heading: '٣. دقة العروض',
      body: <>
        <p>نبذل قصارى جهدنا لضمان دقة العروض المُدرجة وتحديثها. ومع ذلك، تخضع عروض المطاعم للتغيير دون إشعار مسبق. لا تتحمل {brand} أي مسؤولية عن أي تناقض بين العرض المُدرج وما يوفره المطعم في يوم زيارتك.</p>
        <p>نوصي بشدة بتأكيد توفر العرض مع المطعم مباشرةً قبل الزيارة.</p>
      </>,
    },
    {
      heading: '٤. الاستخدام المقبول',
      body: <>
        <p>توافق على عدم:</p>
        <ul>
          <li>استخدام المنصة لأي غرض غير قانوني.</li>
          <li>محاولة استخراج المحتوى أو نسخه أو إعادة إنتاجه دون إذن.</li>
          <li>التدخل في المنصة أو خوادمها أو تعطيلها.</li>
          <li>نشر أو إرسال أي محتوى ضار أو مسيء أو مضلل.</li>
        </ul>
      </>,
    },
    {
      heading: '٥. الملكية الفكرية',
      body: <p>جميع المحتويات على {brand} — بما في ذلك النصوص والشعارات والتصميم — مملوكة لـ {brand} أو مرخصة لها. لا يجوز لك إعادة إنتاجها أو توزيعها دون موافقة خطية مسبقة منا. تظل أسماء المطاعم وشعاراتها وصورها ملكًا لأصحابها.</p>,
    },
    {
      heading: '٦. تحديد المسؤولية',
      body: <p>يُقدَّم {brand} "كما هو" دون أي ضمانات. إلى أقصى حد يسمح به قانون الإمارات، لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو تبعية ناشئة عن استخدامك للمنصة أو اعتمادك على أي عرض مُدرج.</p>,
    },
    {
      heading: '٧. تغييرات على هذه الشروط',
      body: <p>قد نقوم بتحديث هذه الشروط بشكل دوري. استمرار استخدام المنصة بعد نشر التغييرات يُعدّ قبولًا للشروط المحدّثة.</p>,
    },
    {
      heading: '٨. القانون الحاكم',
      body: <p>تخضع هذه الشروط لقوانين الإمارات العربية المتحدة. يخضع أي نزاع للاختصاص القضائي الحصري لمحاكم الإمارات.</p>,
    },
    {
      heading: '٩. التواصل',
      body: <p>لأي استفسارات حول هذه الشروط، تواصل معنا عبر <a href="/list-your-restaurant" className="text-primary underline underline-offset-2 hover:opacity-80">صفحة التواصل</a>.</p>,
    },
  ],
})

export default function TermsContent() {
  const { lang } = useLang()
  const isAr = lang === 'ar'
  const content = isAr ? ar(BRAND.name) : en(BRAND.name)

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-10" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <p className="text-muted-foreground text-sm">{content.updated}</p>
      </div>
      {content.sections.map((s) => (
        <Section key={s.heading} title={s.heading} rtl={isAr}>
          {s.body}
        </Section>
      ))}
    </div>
  )
}
