import { Locale } from "./i18n-config";

export type Dictionary = typeof import("./locales/en.json");

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./locales/en.json").then((m) => m.default as Dictionary),
  bg: () => import("./locales/bg.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

