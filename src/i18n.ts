import 'server-only';

const dictionaries = {
  zh: () => import('./app/dictionaries/zh.json').then((module) => module.default),
  en: () => import('./app/dictionaries/en.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.zh();
};
