import type { TranslationKeys } from '../../i18n/types';
import type { FormSection } from './types';

export const createFormConfig = (t: TranslationKeys): FormSection[] => [
  {
    id: 'redFlags',
    title: t.diagnostic.redFlags.title,
    isRedFlags: true,
    fields: [
      {
        id: 'redFlagsSelection',
        type: 'checkbox',
        label: t.diagnostic.redFlags.description,
        required: false,
        options: t.diagnostic.redFlags.options.concat([
          { value: 'none', label: t.diagnostic.redFlags.noRedFlags }
        ])
      }
    ]
  },
  {
    id: 'generalInfo',
    title: t.diagnostic.sections.generalInfo.title,
    fields: [
      {
        id: 'age',
        type: 'number',
        label: t.diagnostic.sections.generalInfo.age,
        required: true,
        min: '18',
        max: '100'
      },
      {
        id: 'gender',
        type: 'radio',
        label: t.diagnostic.sections.generalInfo.gender,
        required: true,
        options: [
          { value: 'male', label: t.diagnostic.sections.generalInfo.genderOptions.male },
          { value: 'female', label: t.diagnostic.sections.generalInfo.genderOptions.female }
        ]
      },
      {
        id: 'height',
        type: 'number',
        label: t.diagnostic.sections.generalInfo.height,
        placeholder: 'cm'
      },
      {
        id: 'weight',
        type: 'number',
        label: t.diagnostic.sections.generalInfo.weight,
        placeholder: 'kg'
      },
      {
        id: 'profession',
        type: 'text',
        label: t.diagnostic.sections.generalInfo.profession,
        required: true
      },
      {
        id: 'activityLevel',
        type: 'radio',
        label: t.diagnostic.sections.generalInfo.activityLevel,
        required: true,
        options: t.diagnostic.sections.generalInfo.activityOptions
      }
    ]
  },
  {
    id: 'painHistory',
    title: t.diagnostic.sections.painHistory.title,
    fields: [
      {
        id: 'painDuration',
        type: 'radio',
        label: t.diagnostic.sections.painHistory.duration,
        required: true,
        options: t.diagnostic.sections.painHistory.durationOptions
      },
      {
        id: 'painOnset',
        type: 'radio',
        label: t.diagnostic.sections.painHistory.onset,
        required: true,
        options: t.diagnostic.sections.painHistory.onsetOptions
      },
      {
        id: 'painContinuity',
        type: 'radio',
        label: t.diagnostic.sections.painHistory.continuity,
        required: true,
        options: t.diagnostic.sections.painHistory.continuityOptions
      },
      {
        id: 'painEvolution',
        type: 'radio',
        label: t.diagnostic.sections.painHistory.evolution,
        required: true,
        options: t.diagnostic.sections.painHistory.evolutionOptions
      }
    ]
  },
  {
    id: 'painLocation',
    title: t.diagnostic.sections.painLocation.title,
    fields: [
      {
        id: 'painLocation',
        type: 'radio',
        label: t.diagnostic.sections.painLocation.location,
        required: true,
        options: t.diagnostic.sections.painLocation.locationOptions
      },
      {
        id: 'painRadiation',
        type: 'radio',
        label: t.diagnostic.sections.painLocation.radiation,
        required: true,
        options: t.diagnostic.sections.painLocation.radiationOptions
      },
      {
        id: 'numbnessTingling',
        type: 'radio',
        label: t.diagnostic.sections.painLocation.numbnessTingling,
        required: true,
        options: t.diagnostic.sections.painLocation.numbnessTinglingOptions
      },
      {
        id: 'numbnessDetails',
        type: 'textarea',
        label: t.diagnostic.sections.painLocation.numbnessDetails,
        placeholder: t.diagnostic.sections.painLocation.numbnessDetailsPlaceholder,
        conditionalOn: {
          field: 'numbnessTingling',
          value: 'yes'
        }
      }
    ]
  },
  {
    id: 'painCharacteristics',
    title: t.diagnostic.sections.painCharacteristics.title,
    fields: [
      {
        id: 'painIntensity',
        type: 'painScale',
        label: t.diagnostic.sections.painCharacteristics.intensity,
        required: true,
        scaleLabels: {
          low: t.diagnostic.sections.painCharacteristics.intensityScale.none,
          high: t.diagnostic.sections.painCharacteristics.intensityScale.extreme
        }
      },
      {
        id: 'painType',
        type: 'checkbox',
        label: t.diagnostic.sections.painCharacteristics.type,
        required: true,
        options: t.diagnostic.sections.painCharacteristics.typeOptions
      },
      {
        id: 'painMoments',
        type: 'checkbox',
        label: t.diagnostic.sections.painCharacteristics.moments,
        required: true,
        options: t.diagnostic.sections.painCharacteristics.momentsOptions
      }
    ]
  },
  {
    id: 'painFactors',
    title: t.diagnostic.sections.painFactors.title,
    fields: [
      {
        id: 'aggravatingFactors',
        type: 'checkbox',
        label: t.diagnostic.sections.painFactors.aggravating,
        required: true,
        options: t.diagnostic.sections.painFactors.aggravatingOptions
      },
      {
        id: 'aggravatingOther',
        type: 'text',
        label: t.diagnostic.sections.painFactors.aggravatingOther,
        placeholder: t.diagnostic.sections.painFactors.aggravatingOtherPlaceholder,
        conditionalOn: {
          field: 'aggravatingFactors',
          value: ['other']
        }
      },
      {
        id: 'relievingFactors',
        type: 'checkbox',
        label: t.diagnostic.sections.painFactors.relieving,
        required: true,
        options: t.diagnostic.sections.painFactors.relievingOptions
      },
      {
        id: 'relievingOther',
        type: 'text',
        label: t.diagnostic.sections.painFactors.relievingOther,
        placeholder: t.diagnostic.sections.painFactors.relievingOtherPlaceholder,
        conditionalOn: {
          field: 'relievingFactors',
          value: ['other']
        }
      }
    ]
  },
  {
    id: 'medicalHistory',
    title: t.diagnostic.sections.medicalHistory.title,
    fields: [
      {
        id: 'previousInjuries',
        type: 'radio',
        label: t.diagnostic.sections.medicalHistory.previousInjuries,
        required: true,
        options: t.diagnostic.sections.medicalHistory.previousInjuriesOptions
      },
      {
        id: 'previousInjuriesDetails',
        type: 'textarea',
        label: t.diagnostic.sections.medicalHistory.previousInjuriesDetails,
        placeholder: t.diagnostic.sections.medicalHistory.previousInjuriesDetailsPlaceholder,
        conditionalOn: {
          field: 'previousInjuries',
          value: 'yes'
        }
      },
      {
        id: 'previousExams',
        type: 'radio',
        label: t.diagnostic.sections.medicalHistory.previousExams,
        required: true,
        options: t.diagnostic.sections.medicalHistory.previousExamsOptions
      },
      {
        id: 'previousExamsDetails',
        type: 'textarea',
        label: t.diagnostic.sections.medicalHistory.previousExamsDetails,
        placeholder: t.diagnostic.sections.medicalHistory.previousExamsDetailsPlaceholder,
        conditionalOn: {
          field: 'previousExams',
          value: 'yes'
        }
      },
      {
        id: 'generalHistory',
        type: 'textarea',
        label: t.diagnostic.sections.medicalHistory.generalHistory,
        placeholder: t.diagnostic.sections.medicalHistory.generalHistoryPlaceholder
      }
    ]
  },
  {
    id: 'lifestyle',
    title: t.diagnostic.sections.lifestyle.title,
    fields: [
      {
        id: 'workPosition',
        type: 'radio',
        label: t.diagnostic.sections.lifestyle.workPosition,
        required: true,
        options: t.diagnostic.sections.lifestyle.workPositionOptions
      },
      {
        id: 'sleepQuality',
        type: 'radio',
        label: t.diagnostic.sections.lifestyle.sleepQuality,
        required: true,
        options: t.diagnostic.sections.lifestyle.sleepQualityOptions
      },
      {
        id: 'stressLevel',
        type: 'radio',
        label: t.diagnostic.sections.lifestyle.stressLevel,
        required: true,
        options: t.diagnostic.sections.lifestyle.stressLevelOptions
      },
      {
        id: 'currentExercises',
        type: 'radio',
        label: t.diagnostic.sections.lifestyle.currentExercises,
        required: true,
        options: t.diagnostic.sections.lifestyle.currentExercisesOptions
      },
      {
        id: 'currentExercisesDetails',
        type: 'textarea',
        label: t.diagnostic.sections.lifestyle.currentExercisesDetails,
        placeholder: t.diagnostic.sections.lifestyle.currentExercisesDetailsPlaceholder,
        conditionalOn: {
          field: 'currentExercises',
          value: 'yes'
        }
      }
    ]
  },
  {
    id: 'goals',
    title: t.diagnostic.sections.goals.title,
    fields: [
      {
        id: 'primaryGoal',
        type: 'radio',
        label: t.diagnostic.sections.goals.primary,
        required: true,
        options: t.diagnostic.sections.goals.primaryOptions
      },
      {
        id: 'primaryGoalOther',
        type: 'text',
        label: t.diagnostic.sections.goals.primaryOther,
        placeholder: t.diagnostic.sections.goals.primaryOtherPlaceholder,
        conditionalOn: {
          field: 'primaryGoal',
          value: 'other'
        }
      }
    ]
  }
];