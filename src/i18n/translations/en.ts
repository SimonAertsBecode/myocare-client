import type { TranslationKeys } from "../types";

export const en: TranslationKeys = {
  meta: {
    title: "MyoCare - Relieve your back pain with personalized exercises",
    description:
      "MyoCare helps you relieve back pain through personalized exercises created by expert physiotherapists. 5-min diagnosis, 24h analysis, targeted exercise PDFs.",
    keywords:
      "back pain, back problems, physiotherapy, back exercises, lower back pain, MyoCare, online physiotherapist",
    ogTitle: "MyoCare - Relieve your back pain with personalized exercises",
    ogDescription:
      "85% of back pain can be relieved through exercise. MyoCare connects you to expert physiotherapists for personalized back pain exercises.",
    twitterTitle: "MyoCare - Relieve your back pain",
    twitterDescription:
      "Personalized back pain exercises by expert physiotherapists. 5-min diagnosis, PDF in 24h.",
  },
  navigation: {
    home: "Home",
    diagnostic: "Diagnostic",
  },
  landing: {
    hero: {
      badge: "🎯 Specialized in back pain",
      title: "Relieve your back pain with MyoCare",
      subtitle:
        "A complete 6-week rehabilitation plan with 3 progressive PDF sheets to maximize your results against back pain",
      description:
        "15-minute back diagnosis → Analysis by an expert physiotherapist → Receive your complete rehabilitation plan with 3 progressive PDF exercise sheets over 6 weeks",
      approachLabel: "Our approach:",
      medicalDisclaimer:
        "Important: MyoCare complements but does not replace traditional medical diagnosis.",
      ctaPrimary: "Start my rehabilitation plan",
      ctaSecondary: "Learn more",
      cards: {
        diagnostic: {
          title: "Back diagnosis",
          description: "15-minute form",
        },
        analysis: {
          title: "Expert analysis",
          description: "Within 24 hours",
        },
        plan: {
          title: "6-week plan",
          description: "3 progressive PDF sheets",
        },
      },
    },
    howItWorks: {
      title: "How to relieve your back pain",
      subtitle: "3 simple steps to get your personalized exercises",
      steps: {
        step1: {
          title: "Online back diagnosis",
          description:
            "Answer our specialized questionnaire about your back pain: location, intensity, history, daily activities, and triggering factors.",
          tags: ["Back specialized", "15 minutes", "Secure"],
        },
        step2: {
          title: "Physiotherapy analysis",
          description:
            "A physiotherapist expert in back disorders analyzes your profile and selects the exercises best suited to your type of back pain.",
          tags: ["Back expert", "24h max"],
        },
        step3: {
          title: "Your anti-back pain exercises",
          description:
            "Receive your progressive functional exercise PDF sheets specially designed to relieve and prevent your back pain. Accessible via your dashboard.",
          tags: ["Targeted exercises", "Downloadable PDF"],
        },
      },
    },
    education: {
      title: "Why do functional exercises relieve back pain?",
      description:
        "90% of back pain (HAS) can be relieved through adapted and functional exercises. Unlike medications that temporarily mask pain, targeted exercises address root causes: muscle weakness, postural imbalances, and joint stiffness.",
      benefits: {
        targetedStrengthening: {
          title: "Targeted strengthening",
          description:
            "Strengthen your back, abdominal belt, and pelvis muscles for optimal support of your spine.",
        },
        posturalCorrection: {
          title: "Postural correction",
          description:
            "Become aware of and correct muscle imbalances that impact your daily pain.",
        },
        mobilityImprovement: {
          title: "Mobility improvement",
          description:
            "Regain your range of motion and reduce stiffness through specific stretches.",
        },
        durablePrevention: {
          title: "Lasting prevention",
          description: "Prevent pain recurrence by developing good habits.",
        },
      },
      stats: {
        backPainRelief: "of back pain relieved by exercise",
        rehabilitationPlan: "progressive rehabilitation plan over 6 weeks",
      },
    },
    features: {
      title: "Why choose MyoCare for your back",
      subtitle: "A specialized solution for back disorders",
      personalizedCare: {
        title: "Back specialization",
        description:
          "Our physiotherapists specialize in back disorders. Each exercise is selected according to your type of back pain.",
        benefits: [
          "Back disorder expertise",
          "Targeted lumbar exercises",
          "Postural approach",
        ],
      },
      simplifiedAccess: {
        title: "Structured support",
        description:
          "A progressive exercise plan you can follow at your own pace. Each person progresses differently according to their condition and commitment.",
        benefits: [
          "Exercises at your pace",
          "Progressive follow-up",
          "Variable results*",
        ],
      },
      benevolentSupport: {
        title: "Complementary approach",
        description:
          "MyoCare complements your traditional medical follow-up without replacing it. An integrated approach for your well-being.",
        benefits: [
          "Medical complement",
          "Holistic approach",
          "Personalized follow-up",
        ],
      },
      medicalNote:
        "* Results may vary from person to person depending on physical condition, practice consistency, and the nature of the back disorder. MyoCare does not guarantee specific results.",
    },
    cta: {
      title: "Ready to start your exercise plan?",
      description:
        "Join thousands of people who trust MyoCare to accompany them in their wellness journey.",
      button: "Start my back diagnosis",
      stats: {
        users: "Users supported",
        experts: "Back experts",
        satisfaction: "Satisfaction rate",
      },
    },
  },
  diagnostic: {
    title: "Back Diagnosis",
    stepIndicator: "Step {current} of {total}",
    navigation: {
      previous: "Previous",
      next: "Next",
      submit: "Submit Diagnosis",
    },
    sections: {
      generalInfo: {
        title: "General Information",
        age: "Age",
        gender: "Gender",
        genderOptions: {
          male: "Male",
          female: "Female",
        },
        height: "Height (cm)",
        weight: "Weight (kg) - optional",
        profession: "Profession (or main daily activity)",
        activityLevel:
          "Current physical activity level (counting minimum 20min activity):",
        activityOptions: [
          { value: "sedentary", label: "Sedentary" },
          { value: "occasional", label: "Occasional (1-2x/week)" },
          { value: "regular", label: "Regular (3-4x/week)" },
          { value: "intensive", label: "Intensive sports" },
        ],
      },
      painHistory: {
        title: "Pain History",
        duration: "How long have you had this pain?",
        durationOptions: [
          { value: "less_than_week", label: "< 1 week" },
          { value: "one_to_six_weeks", label: "1-6 weeks" },
          { value: "six_weeks_to_three_months", label: "6 weeks – 3 months" },
          {
            value: "more_than_three_months",
            label: "More than 3 months (chronic)",
          },
        ],
        onset: "How did the pain appear?",
        onsetOptions: [
          {
            value: "sudden",
            label: "Suddenly (wrong movement, accident, sport...)",
          },
          { value: "gradual", label: "Gradually, without clear cause" },
        ],
        continuity: "Is the pain continuous or episodic?",
        continuityOptions: [
          { value: "continuous", label: "Continuous (constant pain)" },
          { value: "episodic", label: "Episodic (pain comes and goes)" },
        ],
        evolution: "Evolution since beginning:",
        evolutionOptions: [
          { value: "stable", label: "Stable" },
          { value: "improving", label: "Improving" },
          { value: "worsening", label: "Worsening" },
        ],
      },
      painLocation: {
        title: "Location & Radiation",
        location: "Where is your pain mainly located?",
        locationOptions: [
          { value: "cervical", label: "Cervical" },
          { value: "dorsal", label: "Dorsal" },
          { value: "lumbar", label: "Lumbar" },
        ],
        radiation: "Does the pain radiate?",
        radiationOptions: [
          { value: "none", label: "No" },
          { value: "arm_shoulder", label: "Yes, to arm/shoulder (cervical)" },
          { value: "thorax", label: "Yes, to thorax (dorsal)" },
          { value: "buttock_leg", label: "Yes, to buttock/leg (lumbar)" },
        ],
        numbnessTingling: "Is there numbness, tingling or loss of strength?",
        numbnessTinglingOptions: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        numbnessDetails: "Specify:",
        numbnessDetailsPlaceholder:
          "Describe the sensations and their locations...",
      },
      painCharacteristics: {
        title: "Pain Characteristics",
        intensity: "Average intensity (0 = none, 10 = unbearable)",
        intensityScale: {
          none: "None",
          extreme: "Extreme",
        },
        type: "Type of pain:",
        typeOptions: [
          { value: "heaviness_stiffness", label: "Heaviness / stiffness" },
          { value: "sharp_stabbing", label: "Sharp / stabbing" },
          { value: "burning", label: "Burning" },
          { value: "electric_radiation", label: "Electric radiation" },
        ],
        moments: "When is the pain most present:",
        momentsOptions: [
          { value: "waking_up", label: "Upon waking" },
          { value: "prolonged_sitting", label: "Prolonged sitting position" },
          { value: "prolonged_standing", label: "Prolonged standing position" },
          { value: "walking", label: "While walking" },
          { value: "effort", label: "During effort" },
          { value: "evening_night", label: "Evening / night" },
        ],
      },
      painFactors: {
        title: "Aggravating / Relieving Factors",
        aggravating: "What increases the pain?",
        aggravatingOptions: [
          { value: "bending_forward", label: "Bending forward" },
          { value: "extension", label: "Arching back (extension)" },
          { value: "carrying_loads", label: "Carrying loads" },
          { value: "sitting", label: "Staying seated" },
          { value: "standing", label: "Staying standing" },
          { value: "other", label: "Others" },
        ],
        aggravatingOther: "Specify other aggravating factors:",
        aggravatingOtherPlaceholder:
          "Describe other factors that increase your pain...",
        relieving: "What relieves the pain?",
        relievingOptions: [
          { value: "lying_down", label: "Lying down rest" },
          { value: "moving_walking", label: "Moving / walking" },
          { value: "heat", label: "Heat" },
          { value: "stretching", label: "Stretching" },
          { value: "other", label: "Others" },
        ],
        relievingOther: "Specify other relieving factors:",
        relievingOtherPlaceholder:
          "Describe other factors that relieve your pain...",
      },
      medicalHistory: {
        title: "Medical History",
        previousInjuries:
          "Have you had previous injuries/accidents to back or neck?",
        previousInjuriesOptions: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        previousInjuriesDetails: "Specify:",
        previousInjuriesDetailsPlaceholder:
          "Describe past injuries or accidents...",
        previousExams: "Have you had previous exams (X-ray, MRI, CT scan)?",
        previousExamsOptions: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        previousExamsDetails: "Specify results if known:",
        previousExamsDetailsPlaceholder: "Describe the exam results...",
        generalHistory:
          "Important medical history (e.g.: known disc herniation, scoliosis, surgery, rheumatism...)",
        generalHistoryPlaceholder: "Describe your relevant medical history...",
      },
      lifestyle: {
        title: "Lifestyle & Habits",
        workPosition: "Work position:",
        workPositionOptions: [
          { value: "office_sitting", label: "Office / prolonged sitting" },
          {
            value: "physical",
            label: "Physical (carrying loads, handling...)",
          },
          { value: "mixed", label: "Mixed" },
        ],
        sleepQuality: "Sleep quality:",
        sleepQualityOptions: [
          { value: "good", label: "Good" },
          { value: "average", label: "Average" },
          { value: "poor", label: "Poor" },
        ],
        stressLevel: "Perceived stress level:",
        stressLevelOptions: [
          { value: "low", label: "Low" },
          { value: "moderate", label: "Moderate" },
          { value: "high", label: "High" },
        ],
        currentExercises:
          "Do you already do exercises/stretching for your back?",
        currentExercisesOptions: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        currentExercisesDetails: "Specify which ones:",
        currentExercisesDetailsPlaceholder:
          "Describe your current exercises...",
      },
      goals: {
        title: "Goals",
        primary: "What is your primary goal?",
        primaryOptions: [
          { value: "relieve_daily_pain", label: "Relieve daily pain" },
          { value: "return_to_work", label: "Return to normal work" },
          { value: "return_to_sport", label: "Return to sports without pain" },
          { value: "improve_posture", label: "Improve posture" },
          { value: "other", label: "Other" },
        ],
        primaryOther: "Specify:",
        primaryOtherPlaceholder: "Describe your primary goal...",
      },
    },
    redFlags: {
      title: "Preliminary Screening",
      description: "Do you have any of these symptoms?",
      warning: "Medical consultation recommended",
      contactDoctor: "Consult my doctor",
      advice:
        "A medical consultation is necessary before using MyoCare. MyoCare is not suitable for your situation.",
      noRedFlags: "None of these symptoms",
      options: [
        {
          value: "non_mechanical_pain",
          label:
            "Non-mechanical type pain: progressively worsening pain, present at rest and particularly during the night",
        },
        {
          value: "neurological_symptoms",
          label:
            "Extensive neurological symptoms (bladder or anal sphincter control deficit, motor impairment in legs, cauda equina syndrome)",
        },
        {
          value: "perineal_paresthesia",
          label: "Paresthesia in the pubic area (or perineum)",
        },
        {
          value: "major_trauma",
          label: "Major trauma (such as a fall from height)",
        },
        { value: "unexplained_weight_loss", label: "Unexplained weight loss" },
        {
          value: "cancer_fever",
          label: "History of cancer, presence of febrile syndrome",
        },
        {
          value: "drug_use_corticoids",
          label:
            "Intravenous drug use, or prolonged use of corticosteroids (e.g., asthma therapy)",
        },
        {
          value: "spinal_deformation",
          label: "Significant structural spinal deformation",
        },
        { value: "thoracic_pain", label: "Thoracic pain (dorsal rachialgia)" },
        {
          value: "age_extremes",
          label: "Age of onset less than 20 years or greater than 55 years",
        },
        { value: "fever", label: "Fever" },
        {
          value: "general_deterioration",
          label: "General condition deterioration",
        },
      ],
    },
    summary: {
      title: "Summary of your diagnosis",
      description:
        "We will analyze your responses and propose a personalized exercise plan adapted to your back pain. You will receive your rehabilitation plan within 24 hours.",
    },
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} MyoCare. All rights reserved.`,
  },
};
