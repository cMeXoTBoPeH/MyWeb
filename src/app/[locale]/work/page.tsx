import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, defaultLocale, isLocale } from "@/i18n/i18n-config";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bg" }];
}

export default async function Work({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);
  return (
    <section className="container-max py-16 md:py-24">
      <h1 className="font-heading tracking-wideplus text-4xl md:text-5xl mb-4">{dict.work.title}</h1>
      {dict.work.intro && <p className="opacity-80 mb-10 max-w-2xl">{dict.work.intro}</p>}
      <div className="grid md:grid-cols-3 gap-6">
        {dict.work.projects?.map((p: any) => (
          <Link key={p.slug} href={`/${locale}/work/${p.slug}/`} className="block group">
            <div className="aspect-[4/3] rounded border border-muted-light/70 dark:border-muted-dark/60 bg-muted-light/60 dark:bg-muted-dark/60 mb-3 group-hover:translate-y-[-2px] transition-transform" />
            <div className="font-medium">{p[locale].title}</div>
            <div className="opacity-80 text-sm">{p[locale].oneLiner}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

