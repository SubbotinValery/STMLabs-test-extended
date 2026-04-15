import { useEffect, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from './LanguageContext';
import type { Language } from '@/shared/locales';

const LANGUAGE_STORAGE_KEY = 'app-language';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();

  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === 'ru' || stored === 'en') return stored;
    return (i18n.language || 'ru') as Language;
  });

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ru' ? 'en' : 'ru'));
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
