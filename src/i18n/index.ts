import { fr } from './translations/fr';
import { en } from './translations/en';
import type { Language, Translations, TranslationKeys } from './types';

export const translations: Translations = {
  fr,
  en,
};

export const defaultLanguage: Language = 'fr';

export const getTranslation = (language: Language): TranslationKeys => {
  return translations[language] || translations[defaultLanguage];
};

export const getNestedTranslation = (
  translations: TranslationKeys,
  key: string
): string => {
  const keys = key.split('.');
  let result: unknown = translations;
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key; // Return the key if translation not found
    }
  }
  
  return typeof result === 'string' ? result : key;
};

export type * from './types';
export * from './translations/fr';
export * from './translations/en';