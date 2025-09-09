import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, defaultLocale, isLocale } from "@/i18n/i18n-config";

export function generateStaticParams() {
  const slugs = ["case-1", "case-2", "case-3", "case-4", "case-5", "case-6"];
  return [
    ...slugs.map((slug) => ({ locale: "en", slug })),
    ...slugs.map((slug) => ({ locale: "bg", slug })),
  ];
}

export default async function CaseStudy({ params }: { params: { locale: string; slug: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <article className="container-max py-16 md:py-24 prose dark:prose-invert max-w-3xl">
      <h1 className="font-heading not-prose tracking-wideplus text-4xl md:text-5xl mb-6">Case: {params.slug}</h1>
      <section>
        <h2>{dict.work.case.problem}</h2>
        <p>A legacy site was slow and inconsistent across devices.</p>
      </section>
      <section>
        <h2>{dict.work.case.approach}</h2>
        <p>We redesigned the UI, rebuilt with modern frameworks, and optimized assets.</p>
      </section>
      <section>
        <h2>{dict.work.case.result}</h2>
        <p>+38% conversion rate, 95+ Lighthouse, and improved search rankings.</p>
      </section>
    </article>
  );
}

