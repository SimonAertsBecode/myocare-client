interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  label: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  required?: boolean;
}

export const CheckboxGroup = ({ 
  label, 
  options, 
  values, 
  onChange, 
  required = false 
}: CheckboxGroupProps) => {
  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange([...values, optionValue]);
    } else {
      onChange(values.filter(v => v !== optionValue));
    }
  };

  return (
    <div className="form-group">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="checkbox-group">
        {options.map((option, index) => (
          <label key={index} className="checkbox-option">
            <input
              type="checkbox"
              value={option.value}
              checked={values.includes(option.value)}
              onChange={(e) => handleChange(option.value, e.target.checked)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};