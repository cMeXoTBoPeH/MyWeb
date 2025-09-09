import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, defaultLocale, isLocale } from "@/i18n/i18n-config";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bg" }];
}

export default async function Services({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);
  return (
    <section className="container-max py-16 md:py-24">
      <h1 className="font-heading tracking-wideplus text-4xl md:text-5xl mb-4">{dict.services.title}</h1>
      {dict.services.intro && <p className="opacity-80 mb-10 max-w-2xl">{dict.services.intro}</p>}
      <div className="grid md:grid-cols-2 gap-6">
        {dict.services.items.map((item, i) => (
          <div key={i} className="elevate p-6 rounded-lg border border-muted-light/70 dark:border-muted-dark/60">
            <div className="text-lg mb-2">{item[locale]}</div>
            {item.bullets && item.bullets[locale] && (
              <ul className="list-disc pl-5 opacity-80 space-y-1">
                {item.bullets[locale].map((b: string, idx: number) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {dict.services.cta && (
        <div className="mt-10">
          <a href={`/${locale}/contact/`} className="hover:text-accent underline">
            {dict.services.cta[locale]}
          </a>
        </div>
      )}
    </section>
  );
}

