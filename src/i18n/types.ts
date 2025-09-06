export type Language = 'fr' | 'en' | 'nl';

export interface TranslationKeys {
  navigation: {
    home: string;
  };
  landing: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      approachLabel: string;
      medicalDisclaimer: string;
      ctaPrimary: string;
      ctaSecondary: string;
      cards: {
        diagnostic: {
          title: string;
          description: string;
        };
        analysis: {
          title: string;
          description: string;
        };
        plan: {
          title: string;
          description: string;
        };
      };
    };
    howItWorks: {
      title: string;
      subtitle: string;
      steps: {
        step1: {
          title: string;
          description: string;
          tags: string[];
        };
        step2: {
          title: string;
          description: string;
          tags: string[];
        };
        step3: {
          title: string;
          description: string;
          tags: string[];
        };
      };
    };
    education: {
      title: string;
      description: string;
      benefits: {
        targetedStrengthening: {
          title: string;
          description: string;
        };
        posturalCorrection: {
          title: string;
          description: string;
        };
        mobilityImprovement: {
          title: string;
          description: string;
        };
        durablePrevention: {
          title: string;
          description: string;
        };
      };
      stats: {
        backPainRelief: string;
        rehabilitationPlan: string;
      };
    };
    features: {
      title: string;
      subtitle: string;
      personalizedCare: {
        title: string;
        description: string;
        benefits: string[];
      };
      simplifiedAccess: {
        title: string;
        description: string;
        benefits: string[];
      };
      benevolentSupport: {
        title: string;
        description: string;
        benefits: string[];
      };
      medicalNote: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
      stats: {
        users: string;
        experts: string;
        satisfaction: string;
      };
    };
  };
  footer: {
    copyright: string;
  };
}

export type Translations = Record<Language, TranslationKeys>;