export type Language = 'fr' | 'en';

export interface TranslationKeys {
  navigation: {
    home: string;
  };
  landing: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    features: {
      title: string;
      personalizedCare: {
        title: string;
        description: string;
      };
      simplifiedAccess: {
        title: string;
        description: string;
      };
      benevolentSupport: {
        title: string;
        description: string;
      };
    };
  };
  footer: {
    copyright: string;
  };
}

export type Translations = Record<Language, TranslationKeys>;