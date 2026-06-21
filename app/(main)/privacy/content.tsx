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
  title: 'Privacy Policy',
  updated: 'Last updated: June 2026',
  sections: [
    {
      heading: '1. Who We Are',
      body: <p>{brand} is a UAE-based platform that helps diners discover exclusive walk-in offers from restaurants and cafés across the Emirates. When we say &ldquo;{brand}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;, we mean the team operating this platform.</p>,
    },
    {
      heading: '2. What We Collect',
      body: <>
        <p>We collect only what is necessary to run the service:</p>
        <ul>
          <li><strong>Usage data</strong> — which pages you visit and how you interact with the site (only if you consent to analytics cookies).</li>
          <li><strong>Contact messages</strong> — if you reach out via our contact form.</li>
        </ul>
        <p>We do not collect payment information, location data, or any personally identifiable information (PII) such as your name, email address, phone number, or physical address through analytics.</p>
      </>,
    },
    {
      heading: '3. Google Analytics',
      body: <>
        <p>This website uses <strong>Google Analytics 4 (GA4)</strong> to collect anonymous usage statistics. Google Analytics helps us understand how visitors use our site so we can improve your experience.</p>
        <p>Google Analytics collects:</p>
        <ul>
          <li>Pages visited and time spent on each page</li>
          <li>General device and browser information (e.g. screen size, browser type)</li>
          <li>Approximate country or region (not precise location)</li>
          <li>How you arrived at the site (e.g. search engine, direct link)</li>
        </ul>
        <p><strong>We do not send any personally identifiable information to Google Analytics.</strong> IP anonymisation is enabled, and advertising features and Google Signals are disabled.</p>
        <p>Google Analytics is only loaded <strong>after you give consent</strong> via the cookie banner. If you decline or withdraw consent, no analytics data is collected.</p>
      </>,
    },
    {
      heading: '4. Cookies',
      body: <>
        <p>We use the following cookies:</p>
        <ul>
          <li><strong>ga-consent</strong> — stores your cookie preference (&ldquo;accepted&rdquo; or &ldquo;declined&rdquo;). This is a functional cookie required to remember your choice and does not track you.</li>
          <li><strong>Google Analytics cookies (_ga, _ga_*)</strong> — set only if you accept analytics cookies. These collect anonymous usage data as described above.</li>
        </ul>
        <p>If you decline, no cookies are stored on your device.</p>
      </>,
    },
    {
      heading: '5. Your Cookie Choices',
      body: <>
        <p>On your first visit, a cookie banner gives you the choice to accept or decline analytics cookies. You can change your preference at any time by clicking <strong>Cookie Preferences</strong> in the footer of any page.</p>
        <p>You can also opt out of Google Analytics across all websites by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">Google Analytics Opt-out Browser Add-on</a>.</p>
      </>,
    },
    {
      heading: '6. How We Use Your Data',
      body: <>
        <ul>
          <li>To understand how the platform is used so we can improve it.</li>
          <li>To respond to your enquiries.</li>
        </ul>
        <p>We will never sell your data to third parties.</p>
      </>,
    },
    {
      heading: '7. Your Rights',
      body: <>
        <p>You have the right to:</p>
        <ul>
          <li>Decline or withdraw consent for analytics cookies at any time.</li>
          <li>Request information about the data we hold.</li>
          <li>Request deletion of any data associated with you.</li>
        </ul>
        <p>To exercise any of these rights, contact us and we will respond within 7 days.</p>
      </>,
    },
    {
      heading: '8. Changes to This Policy',
      body: <p>We may update this policy from time to time. Continued use of the platform after changes are posted constitutes acceptance. The date at the top of this page shows when it was last updated.</p>,
    },
    {
      heading: '9. Contact',
      body: <p>For any privacy-related questions, please reach out through our <a href="/list-your-restaurant" className="text-primary underline underline-offset-2 hover:opacity-80">contact page</a>.</p>,
    },
  ],
})

const ar = (brand: string) => ({
  title: 'سياسة الخصوصية',
  updated: 'آخر تحديث: يونيو 2026',
  sections: [
    {
      heading: '١. من نحن',
      body: <p>{brand} منصة إماراتية تساعد رواد المطاعم على اكتشاف العروض الحصرية للدخول المباشر من المطاعم والمقاهي في جميع أنحاء الإمارات. عندما نذكر "{brand}" أو "نحن" أو "لنا"، فإننا نعني الفريق المشغّل لهذه المنصة.</p>,
    },
    {
      heading: '٢. ما الذي نجمعه',
      body: <>
        <p>نجمع فقط ما هو ضروري لتشغيل الخدمة:</p>
        <ul>
          <li><strong>بيانات الاستخدام</strong> — الصفحات التي تزورها وكيفية تفاعلك مع الموقع (فقط إذا وافقت على ملفات تعريف الارتباط التحليلية).</li>
          <li><strong>رسائل التواصل</strong> — إذا تواصلت معنا عبر نموذج التواصل.</li>
        </ul>
        <p>لا نجمع معلومات الدفع أو بيانات الموقع أو أي معلومات تعريفية شخصية مثل اسمك أو بريدك الإلكتروني أو رقم هاتفك أو عنوانك الفعلي.</p>
      </>,
    },
    {
      heading: '٣. Google Analytics',
      body: <>
        <p>يستخدم هذا الموقع <strong>Google Analytics 4 (GA4)</strong> لجمع إحصاءات استخدام مجهولة الهوية، تساعدنا على فهم كيفية استخدام الزوار لموقعنا وتحسين تجربتك.</p>
        <p>يجمع Google Analytics:</p>
        <ul>
          <li>الصفحات المزارة والوقت المستغرق في كل صفحة</li>
          <li>معلومات عامة عن الجهاز والمتصفح (مثل حجم الشاشة ونوع المتصفح)</li>
          <li>البلد أو المنطقة التقريبية (ليس الموقع الدقيق)</li>
          <li>كيف وصلت إلى الموقع (مثل محرك البحث أو رابط مباشر)</li>
        </ul>
        <p><strong>لا نرسل أي معلومات تعريفية شخصية إلى Google Analytics.</strong> إخفاء هوية عنوان IP مُفعَّل، وميزات الإعلانات وإشارات Google معطّلة.</p>
        <p>يتم تحميل Google Analytics فقط <strong>بعد إعطاء موافقتك</strong> عبر شريط ملفات تعريف الارتباط. إذا رفضت أو سحبت موافقتك، فلن يتم جمع أي بيانات تحليلية.</p>
      </>,
    },
    {
      heading: '٤. ملفات تعريف الارتباط',
      body: <>
        <p>نستخدم ملفات تعريف الارتباط التالية:</p>
        <ul>
          <li><strong>ga-consent</strong> — يخزن تفضيلك ("مقبول" أو "مرفوض"). هذا ملف وظيفي لتذكر اختيارك ولا يتتبعك.</li>
          <li><strong>ملفات Google Analytics (‎_ga، ‎_ga_*‎)</strong> — تُعيَّن فقط عند قبول ملفات تعريف الارتباط التحليلية.</li>
        </ul>
        <p>إذا رفضت، لن يتم تخزين أي ملفات تعريف ارتباط على جهازك.</p>
      </>,
    },
    {
      heading: '٥. خياراتك لملفات تعريف الارتباط',
      body: <>
        <p>في زيارتك الأولى، يمنحك شريط ملفات تعريف الارتباط خيار القبول أو الرفض. يمكنك تغيير تفضيلاتك في أي وقت بالنقر على <strong>تفضيلات ملفات تعريف الارتباط</strong> في تذييل أي صفحة.</p>
        <p>يمكنك أيضًا إلغاء الاشتراك في Google Analytics عبر جميع المواقع من خلال تثبيت <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">إضافة المتصفح لإلغاء الاشتراك في Google Analytics</a>.</p>
      </>,
    },
    {
      heading: '٦. كيف نستخدم بياناتك',
      body: <>
        <ul>
          <li>لفهم كيفية استخدام المنصة وتحسينها.</li>
          <li>للرد على استفساراتك.</li>
        </ul>
        <p>لن نبيع بياناتك أبدًا لأطراف ثالثة.</p>
      </>,
    },
    {
      heading: '٧. حقوقك',
      body: <>
        <p>لديك الحق في:</p>
        <ul>
          <li>رفض أو سحب الموافقة على ملفات تعريف الارتباط التحليلية في أي وقت.</li>
          <li>طلب معلومات حول البيانات التي نحتفظ بها.</li>
          <li>طلب حذف أي بيانات مرتبطة بك.</li>
        </ul>
        <p>للممارسة أي من هذه الحقوق، تواصل معنا وسنرد خلال 7 أيام.</p>
      </>,
    },
    {
      heading: '٨. تغييرات على هذه السياسة',
      body: <p>قد نقوم بتحديث هذه السياسة من وقت لآخر. استمرار استخدام المنصة بعد نشر التغييرات يُعدّ قبولًا لها. يُظهر التاريخ في أعلى هذه الصفحة آخر تحديث.</p>,
    },
    {
      heading: '٩. التواصل',
      body: <p>لأي أسئلة تتعلق بالخصوصية، يُرجى التواصل معنا عبر <a href="/list-your-restaurant" className="text-primary underline underline-offset-2 hover:opacity-80">صفحة التواصل</a>.</p>,
    },
  ],
})

export default function PrivacyContent() {
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
