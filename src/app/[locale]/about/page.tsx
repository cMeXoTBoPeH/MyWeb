import Image from "next/image";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, defaultLocale, isLocale } from "@/i18n/i18n-config";

export default async function About({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <section className="container-max py-16 md:py-24">
      <h1 className="font-heading tracking-wideplus text-4xl md:text-5xl mb-6">{dict.about.title}</h1>
      <p className="opacity-80 mb-4 max-w-2xl">{dict.about.story}</p>
      <p className="opacity-80 mb-8 max-w-2xl">{dict.about.philosophy}</p>
      <div className="flex items-center gap-4 mb-10">
        <div className="h-16 w-16 rounded-full bg-muted-light/60 dark:bg-muted-dark/60" aria-label="Avatar" />
        <div className="opacity-80">{dict.about.bio}</div>
      </div>
      <div>
        <h2 className="font-heading tracking-wideplus text-2xl md:text-3xl mb-4">{dict.about.how.title}</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {dict.about.how.items.map((item, i) => (
            <li key={i} className="p-4 rounded border border-muted-light/70 dark:border-muted-dark/60">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

