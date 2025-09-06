import { createContext } from 'react';
import type { Language, TranslationKeys } from './types';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);