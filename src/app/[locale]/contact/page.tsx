import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, defaultLocale, isLocale } from "@/i18n/i18n-config";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bg" }];
}

export default async function Contact({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <section className="container-max py-16 md:py-24">
      <h1 className="font-heading tracking-wideplus text-4xl md:text-5xl mb-4">{dict.contact.title}</h1>
      <p className="opacity-80 mb-8">{dict.contact.microcopy}</p>
      <form className="grid gap-6 max-w-xl" aria-label="Contact form">
        <div className="grid gap-2">
          <label htmlFor="name">{dict.contact.form.name}</label>
          <input id="name" name="name" type="text" required placeholder={dict.contact.form.placeholders.name} className="rounded px-4 py-3 bg-transparent border border-muted-light/70 dark:border-muted-dark/60" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">{dict.contact.form.email}</label>
          <input id="email" name="email" type="email" required placeholder={dict.contact.form.placeholders.email} className="rounded px-4 py-3 bg-transparent border border-muted-light/70 dark:border-muted-dark/60" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message">{dict.contact.form.message}</label>
          <textarea id="message" name="message" required placeholder={dict.contact.form.placeholders.message} rows={6} className="rounded px-4 py-3 bg-transparent border border-muted-light/70 dark:border-muted-dark/60" />
        </div>
        <div>
          <button type="submit" className="elevate rounded px-5 py-3 bg-foreground-light text-background-light dark:bg-foreground-dark dark:text-background-dark hover:opacity-90">{dict.contact.form.submit}</button>
        </div>
      </form>
      <div className="mt-10 opacity-80">
        <a className="hover:text-accent" href="mailto:hello@websi.example">hello@websi.example</a> · <a className="hover:text-accent" href="#" aria-label="Twitter">Twitter</a> · <a className="hover:text-accent" href="#" aria-label="LinkedIn">LinkedIn</a>
      </div>
    </section>
  );
}

