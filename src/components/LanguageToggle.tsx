"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, Locale } from "@/i18n/i18n-config";

function replaceLocale(pathname: string, nextLocale: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  // Remove basePath 'MyWeb' if present in client path
  if (parts[0] === 'MyWeb') parts.shift();
  if (parts.length === 0) return `/MyWeb/${nextLocale}`;
  if (locales.includes(parts[0] as Locale)) {
    parts[0] = nextLocale;
    return "/MyWeb/" + parts.join("/");
  }
  return `/MyWeb/${nextLocale}/` + parts.join("/");
}

export default function LanguageToggle({ current }: { current: Locale }) {
  const pathname = usePathname() || "/";
  const other = current === "en" ? "bg" : "en";
  const href = replaceLocale(pathname, other);

  return (
    <div className="inline-flex items-center gap-2 text-sm">
      <Link href={replaceLocale(pathname, "en")} aria-current={current === "en" ? "true" : undefined} className={`px-2 py-1 rounded hover:text-accent ${current === "en" ? "text-accent" : "opacity-70"}`}>EN</Link>
      <span className="opacity-40">/</span>
      <Link href={replaceLocale(pathname, "bg")} aria-current={current === "bg" ? "true" : undefined} className={`px-2 py-1 rounded hover:text-accent ${current === "bg" ? "text-accent" : "opacity-70"}`}>BG</Link>
    </div>
  );
}

