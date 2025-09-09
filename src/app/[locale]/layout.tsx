import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale, defaultLocale, isLocale } from "@/i18n/i18n-config";
import Logo from "@/components/Logo";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: {
      default: `${dict.meta.siteName}`,
      template: `%s • ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    alternates: {
      languages: {
        en: `/en`,
        bg: `/bg`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);

  const nav = [
    { href: `/${locale}`, label: dict.meta.nav.home },
    { href: `/${locale}/services`, label: dict.meta.nav.services },
    { href: `/${locale}/work`, label: dict.meta.nav.work },
    { href: `/${locale}/about`, label: dict.meta.nav.about },
    { href: `/${locale}/contact`, label: dict.meta.nav.contact },
  ];

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur bg-background-light/70 dark:bg-background-dark/60 border-b border-muted-light/70 dark:border-muted-dark/60">
        <div className="container-max flex items-center justify-between h-16">
          <Link href={`/${locale}`} aria-label={dict.meta.siteName} className="elevate">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded">
                {item.label}
              </Link>
            ))}
            <LanguageToggle current={locale} />
            <ThemeToggle />
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle current={locale} />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="hairline">
        <div className="container-max py-8 text-sm flex items-center justify-between">
          <div className="opacity-70">© {new Date().getFullYear()} {dict.meta.siteName}.</div>
          <div className="flex items-center gap-6 opacity-80">
            <Link href={`/${locale}/services`} className="hover:text-accent">{dict.meta.nav.services}</Link>
            <Link href={`/${locale}/work`} className="hover:text-accent">{dict.meta.nav.work}</Link>
            <Link href={`/${locale}/about`} className="hover:text-accent">{dict.meta.nav.about}</Link>
            <Link href={`/${locale}/contact`} className="hover:text-accent">{dict.meta.nav.contact}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

