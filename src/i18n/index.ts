import en from "./locales/en.json";

const LANG = {
  en,
};

export const defaultLang = "en";

export const getI18n = ({ locale }: { locale?: string }) => {
  if (locale && locale in LANG) return LANG[locale as keyof typeof LANG];

  return LANG[defaultLang];
};
