import { createContext } from 'react';
import type { Language } from '@/shared/locales';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
