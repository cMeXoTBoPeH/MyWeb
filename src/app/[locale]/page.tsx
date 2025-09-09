import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, defaultLocale, isLocale } from "@/i18n/i18n-config";

export default async function Home({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <div>
      <section className="container-max py-20 md:py-28">
        <p className="text-sm uppercase tracking-widest opacity-60 mb-4">{dict.meta.tagline}</p>
        <h1 className="font-heading tracking-wideplus text-5xl md:text-7xl leading-[1.08] mb-6">
          {dict.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl opacity-80 mb-10 max-w-2xl">{dict.hero.subcopy}</p>
        <div className="flex items-center gap-4">
          <Link href={`/${locale}/contact`} className="elevate rounded px-5 py-3 bg-foreground-light text-background-light dark:bg-foreground-dark dark:text-background-dark hover:opacity-90">
            {dict.hero.primaryCta}
          </Link>
          <Link href={`/${locale}/work`} className="elevate rounded px-5 py-3 border border-muted-light/70 dark:border-muted-dark/60 hover:text-accent">
            {dict.hero.secondaryCta}
          </Link>
        </div>
      </section>

      <section aria-label="logos" className="hairline">
        <div className="container-max py-10 grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 bg-muted-light/60 dark:bg-muted-dark/60 rounded" aria-hidden="true" />
          ))}
        </div>
      </section>

      <section className="container-max py-16 md:py-24">
        <h2 className="font-heading tracking-wideplus text-3xl md:text-4xl mb-10">{dict.pillars.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[dict.pillars.design, dict.pillars.development, dict.pillars.optimization].map((p, idx) => (
            <div key={idx} className="elevate p-6 rounded-lg border border-muted-light/70 dark:border-muted-dark/60">
              <h3 className="text-xl mb-2">{p.title}</h3>
              <p className="opacity-80">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline">
        <div className="container-max py-16 md:py-24">
          <h2 className="font-heading tracking-wideplus text-3xl md:text-4xl mb-4">{dict.performance.title}</h2>
          <p className="opacity-80 mb-8 max-w-2xl">{dict.performance.desc}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['LCP', 'FID', 'CLS', 'INP'].map((v) => (
              <div key={v} className="p-4 rounded border border-muted-light/70 dark:border-muted-dark/60 text-center">
                <div className="text-2xl font-heading">{v}</div>
                <div className="text-xs opacity-60">Core Web Vital</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-max py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-8 p-6 rounded-lg border border-muted-light/70 dark:border-muted-dark/60">
          <div className="flex-1">
            <h2 className="font-heading tracking-wideplus text-3xl md:text-4xl mb-4">{dict.featured.title}</h2>
            <p className="opacity-80 mb-6">A premium redesign that improved conversions and speed.</p>
            <Link href={`/${locale}/work`} className="inline-block elevate rounded px-5 py-3 border border-muted-light/70 dark:border-muted-dark/60 hover:text-accent">
              {dict.featured.cta}
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-[16/10] bg-muted-light/60 dark:bg-muted-dark/60 rounded" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}

