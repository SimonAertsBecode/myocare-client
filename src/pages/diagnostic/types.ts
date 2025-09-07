export interface FormField {
  id: string;
  type: 'text' | 'number' | 'radio' | 'checkbox' | 'textarea' | 'painScale';
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  min?: string;
  max?: string;
  rows?: number;
  scaleLabels?: {
    low: string;
    high: string;
  };
  conditionalOn?: {
    field: string;
    value: string | string[];
  };
}

export interface FormSection {
  id: string;
  title: string;
  fields: FormField[];
  isRedFlags?: boolean;
}

export interface DiagnosticFormData {
  [sectionId: string]: {
    [fieldId: string]: string | string[];
  };
}

export interface FormStepProps {
  section: FormSection;
  formData: DiagnosticFormData;
  updateFormData: (sectionId: string, fieldId: string, value: string | string[]) => void;
}