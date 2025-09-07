interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const RadioGroup = ({ 
  label, 
  name, 
  options, 
  value, 
  onChange, 
  required = false 
}: RadioGroupProps) => {
  return (
    <div className="form-group">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="radio-group">
        {options.map((option, index) => (
          <label key={index} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};