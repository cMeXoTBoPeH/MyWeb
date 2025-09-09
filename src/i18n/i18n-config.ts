export const locales = ["en", "bg"] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = "en";

export const languageNames: Record<Locale, string> = {
  en: "English",
  bg: "Български",
};

export function isLocale(input: string | undefined | null): input is Locale {
  return !!input && (locales as readonly string[]).includes(input);
}

