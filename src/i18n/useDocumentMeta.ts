import { useEffect } from 'react';
import type { Language, TranslationKeys } from './types';

const updateMetaTag = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.content = content;
};

const getLanguageCode = (language: Language): string => {
  switch (language) {
    case 'fr': return 'fr_FR';
    case 'en': return 'en_US';
    case 'nl': return 'nl_NL';
    default: return 'fr_FR';
  }
};

const getHtmlLang = (language: Language): string => {
  return language;
};

export const useDocumentMeta = (language: Language, translations: TranslationKeys) => {
  useEffect(() => {
    // Update document title
    document.title = translations.meta.title;

    // Update HTML lang attribute
    document.documentElement.lang = getHtmlLang(language);

    // Update meta description
    updateMetaTag('description', translations.meta.description);

    // Update meta keywords
    updateMetaTag('keywords', translations.meta.keywords);

    // Update Open Graph tags
    updateMetaProperty('og:title', translations.meta.ogTitle);
    updateMetaProperty('og:description', translations.meta.ogDescription);
    updateMetaProperty('og:locale', getLanguageCode(language));

    // Update Twitter tags
    updateMetaTag('twitter:title', translations.meta.twitterTitle);
    updateMetaTag('twitter:description', translations.meta.twitterDescription);

  }, [language, translations]);
};