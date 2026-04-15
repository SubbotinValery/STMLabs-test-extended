import { useEffect, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from './LanguageContext';
import type { Language } from '@/shared/locales';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  const language = (i18n.language || 'ru') as Language;

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
