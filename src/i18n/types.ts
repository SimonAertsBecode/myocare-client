export type Language = "fr" | "en" | "nl";

export interface TranslationKeys {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  navigation: {
    home: string;
    diagnostic: string;
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
  diagnostic: {
    title: string;
    stepIndicator: string;
    navigation: {
      previous: string;
      next: string;
      submit: string;
    };
    sections: {
      generalInfo: {
        title: string;
        age: string;
        gender: string;
        genderOptions: {
          male: string;
          female: string;
        };
        height: string;
        weight: string;
        profession: string;
        activityLevel: string;
        activityOptions: Array<{
          value: string;
          label: string;
        }>;
      };
      painHistory: {
        title: string;
        duration: string;
        durationOptions: Array<{
          value: string;
          label: string;
        }>;
        onset: string;
        onsetOptions: Array<{
          value: string;
          label: string;
        }>;
        continuity: string;
        continuityOptions: Array<{
          value: string;
          label: string;
        }>;
        evolution: string;
        evolutionOptions: Array<{
          value: string;
          label: string;
        }>;
      };
      painLocation: {
        title: string;
        location: string;
        locationOptions: Array<{
          value: string;
          label: string;
        }>;
        radiation: string;
        radiationOptions: Array<{
          value: string;
          label: string;
        }>;
        numbnessTingling: string;
        numbnessTinglingOptions: Array<{
          value: string;
          label: string;
        }>;
        numbnessDetails: string;
        numbnessDetailsPlaceholder: string;
      };
      painCharacteristics: {
        title: string;
        intensity: string;
        intensityScale: {
          none: string;
          extreme: string;
        };
        type: string;
        typeOptions: Array<{
          value: string;
          label: string;
        }>;
        moments: string;
        momentsOptions: Array<{
          value: string;
          label: string;
        }>;
      };
      painFactors: {
        title: string;
        aggravating: string;
        aggravatingOptions: Array<{
          value: string;
          label: string;
        }>;
        aggravatingOther: string;
        aggravatingOtherPlaceholder: string;
        relieving: string;
        relievingOptions: Array<{
          value: string;
          label: string;
        }>;
        relievingOther: string;
        relievingOtherPlaceholder: string;
      };
      medicalHistory: {
        title: string;
        previousInjuries: string;
        previousInjuriesOptions: Array<{
          value: string;
          label: string;
        }>;
        previousInjuriesDetails: string;
        previousInjuriesDetailsPlaceholder: string;
        previousExams: string;
        previousExamsOptions: Array<{
          value: string;
          label: string;
        }>;
        previousExamsDetails: string;
        previousExamsDetailsPlaceholder: string;
        generalHistory: string;
        generalHistoryPlaceholder: string;
      };
      lifestyle: {
        title: string;
        workPosition: string;
        workPositionOptions: Array<{
          value: string;
          label: string;
        }>;
        sleepQuality: string;
        sleepQualityOptions: Array<{
          value: string;
          label: string;
        }>;
        stressLevel: string;
        stressLevelOptions: Array<{
          value: string;
          label: string;
        }>;
        currentExercises: string;
        currentExercisesOptions: Array<{
          value: string;
          label: string;
        }>;
        currentExercisesDetails: string;
        currentExercisesDetailsPlaceholder: string;
      };
      goals: {
        title: string;
        primary: string;
        primaryOptions: Array<{
          value: string;
          label: string;
        }>;
        primaryOther: string;
        primaryOtherPlaceholder: string;
      };
    };
    redFlags: {
      title: string;
      description: string;
      warning: string;
      contactDoctor: string;
      advice: string;
      noRedFlags: string;
      options: Array<{
        value: string;
        label: string;
      }>;
    };
    summary: {
      title: string;
      description: string;
    };
  };
  footer: {
    copyright: string;
  };
}

export type Translations = Record<Language, TranslationKeys>;
