import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, defaultLocale, isLocale } from "@/i18n/i18n-config";

export default async function Work({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);
  return (
    <section className="container-max py-16 md:py-24">
      <h1 className="font-heading tracking-wideplus text-4xl md:text-5xl mb-10">{dict.work.title}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Link key={i} href={`/${locale}/work/case-${i + 1}`} className="block group">
            <div className="aspect-[4/3] rounded border border-muted-light/70 dark:border-muted-dark/60 bg-muted-light/60 dark:bg-muted-dark/60 mb-3 group-hover:translate-y-[-2px] transition-transform" />
            <div className="opacity-80">Case {i + 1}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

