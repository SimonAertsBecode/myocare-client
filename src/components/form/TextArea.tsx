interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export const TextArea = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  rows = 4 
}: TextAreaProps) => {
  return (
    <div className="form-group">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </div>
  );
};