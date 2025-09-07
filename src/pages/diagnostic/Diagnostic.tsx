import { useState, useMemo } from "react";
import { useLanguage } from "../../i18n/useLanguage";
import { FormStep } from "./FormStep";
import { createFormConfig } from "./formConfig";
import type { DiagnosticFormData } from "./types";
import "./Diagnostic.css";

const Diagnostic = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DiagnosticFormData>({});
  const [hasRedFlags, setHasRedFlags] = useState(false);
  const [showRedFlagModal, setShowRedFlagModal] = useState(false);

  const formConfig = useMemo(() => createFormConfig(t), [t]);
  const totalSteps = formConfig.length;

  const updateFormData = (
    sectionId: string,
    fieldId: string,
    value: string | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [fieldId]: value,
      },
    }));

    // Check for red flags
    if (sectionId === "redFlags" && fieldId === "redFlagsSelection") {
      const selectedValues = Array.isArray(value) ? value : [];
      const hasRedFlagSelected = selectedValues.some((val) => val !== "none");
      setHasRedFlags(hasRedFlagSelected);
      if (hasRedFlagSelected) {
        setShowRedFlagModal(true);
      }
    }
  };

  const nextStep = () => {
    // Block progression if red flags are selected and user is on red flags step
    if (currentStep === 1 && hasRedFlags) {
      return; // User cannot proceed
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Handle form submission
  };

  const currentSection = formConfig[currentStep - 1];

  const renderSummary = () => (
    <div className="form-summary">
      <h4>{t.diagnostic.summary.title}</h4>
      <p>{t.diagnostic.summary.description}</p>
    </div>
  );

  const renderRedFlagModal = () => (
    <div className="modal-overlay" onClick={() => setShowRedFlagModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h4>{t.diagnostic.redFlags.warning}</h4>
        <p>{t.diagnostic.redFlags.advice}</p>
        <div className="modal-buttons">
          <button
            type="button"
            className="btn-modal primary"
            onClick={() => window.open("tel:", "_self")}
          >
            {t.diagnostic.redFlags.contactDoctor}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="diagnostic-page">
      <div className="diagnostic-container">
        <div className="diagnostic-header">
          <h1>{t.diagnostic.title}</h1>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <p className="step-indicator">
            {t.diagnostic.stepIndicator
              .replace("{current}", currentStep.toString())
              .replace("{total}", totalSteps.toString())}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="diagnostic-form">
          <FormStep
            section={currentSection}
            formData={formData}
            updateFormData={updateFormData}
          />
          {currentStep === totalSteps && renderSummary()}

          <div className="form-navigation">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                {t.diagnostic.navigation.previous}
              </button>
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
                disabled={currentStep === 1 && hasRedFlags}
                style={{
                  opacity: currentStep === 1 && hasRedFlags ? 0.5 : 1,
                  cursor:
                    currentStep === 1 && hasRedFlags
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                {t.diagnostic.navigation.next}
              </button>
            ) : (
              <button type="submit" className="btn-primary">
                {t.diagnostic.navigation.submit}
              </button>
            )}
          </div>
        </form>
        {showRedFlagModal && renderRedFlagModal()}
      </div>
    </div>
  );
};

export default Diagnostic;
