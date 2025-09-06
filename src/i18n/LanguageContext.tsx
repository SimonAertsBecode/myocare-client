import { useState, type ReactNode } from 'react';
import { LanguageContext } from './context';
import type { Language } from './types';
import { fr } from './translations/fr';
import { en } from './translations/en';
import { nl } from './translations/nl';

const translations = {
  fr,
  en,
  nl,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('fr');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};