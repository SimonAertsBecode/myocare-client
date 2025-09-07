import { TextInput, RadioGroup, CheckboxGroup, TextArea, PainScale, ConditionalField } from '../../components/form';
import type { FormStepProps, FormField } from './types';

export const FormStep = ({ section, formData, updateFormData }: FormStepProps) => {
  const sectionData = formData[section.id] || {};

  const isFieldVisible = (field: FormField): boolean => {
    if (!field.conditionalOn) return true;
    
    const { field: conditionField, value: conditionValue } = field.conditionalOn;
    const fieldValue = sectionData[conditionField];
    
    if (Array.isArray(conditionValue)) {
      return Array.isArray(fieldValue) 
        ? conditionValue.some(val => fieldValue.includes(val))
        : conditionValue.includes(fieldValue as string);
    }
    
    return fieldValue === conditionValue;
  };

  const handleFieldChange = (fieldId: string, value: string | string[]) => {
    updateFormData(section.id, fieldId, value);
  };

  const renderField = (field: FormField) => {
    const fieldValue = sectionData[field.id] || (field.type === 'checkbox' ? [] : '');
    
    switch (field.type) {
      case 'text':
      case 'number':
        return (
          <TextInput
            key={field.id}
            label={field.label}
            type={field.type}
            value={fieldValue as string}
            onChange={(value) => handleFieldChange(field.id, value)}
            placeholder={field.placeholder}
            required={field.required}
            min={field.min}
            max={field.max}
          />
        );
      
      case 'radio':
        return (
          <RadioGroup
            key={field.id}
            label={field.label}
            name={`${section.id}-${field.id}`}
            options={field.options || []}
            value={fieldValue as string}
            onChange={(value) => handleFieldChange(field.id, value)}
            required={field.required}
          />
        );
      
      case 'checkbox':
        return (
          <CheckboxGroup
            key={field.id}
            label={field.label}
            options={field.options || []}
            values={fieldValue as string[]}
            onChange={(values) => handleFieldChange(field.id, values)}
            required={field.required}
          />
        );
      
      case 'textarea':
        return (
          <TextArea
            key={field.id}
            label={field.label}
            value={fieldValue as string}
            onChange={(value) => handleFieldChange(field.id, value)}
            placeholder={field.placeholder}
            required={field.required}
            rows={field.rows}
          />
        );
      
      case 'painScale':
        return (
          <PainScale
            key={field.id}
            label={field.label}
            name={`${section.id}-${field.id}`}
            value={fieldValue as string}
            onChange={(value) => handleFieldChange(field.id, value)}
            scaleLabels={field.scaleLabels}
            required={field.required}
          />
        );
      
      default:
        return null;
    }
  };

  const renderConditionalField = (field: FormField) => {
    if (!field.conditionalOn) return renderField(field);
    
    return (
      <ConditionalField key={field.id} show={isFieldVisible(field)}>
        {renderField(field)}
      </ConditionalField>
    );
  };

  return (
    <div className="form-step" data-red-flags={section.isRedFlags || false}>
      <h3>{section.title}</h3>
      {section.fields.map((field) => 
        field.conditionalOn ? renderConditionalField(field) : renderField(field)
      )}
    </div>
  );
};