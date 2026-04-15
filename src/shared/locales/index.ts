import { ruTranslations } from './ru';
import { enTranslations } from './en';

export const resources = {
  ru: {
    translation: ruTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

export type Language = keyof typeof resources;
export const supportedLanguages = Object.keys(resources) as Language[];
