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
      <h1 className="font-heading tracking-wideplus text-4xl md:text-5xl mb-10">{dict.services.title}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {dict.services.items.map((item, i) => (
          <div key={i} className="elevate p-6 rounded-lg border border-muted-light/70 dark:border-muted-dark/60">
            <div className="text-lg">{item.en}</div>
            <div className="opacity-70">{item.bg}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

