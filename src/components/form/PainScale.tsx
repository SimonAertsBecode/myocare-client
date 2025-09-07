interface PainScaleProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
  scaleLabels?: {
    low: string;
    high: string;
  };
  required?: boolean;
}

export const PainScale = ({ 
  label, 
  value, 
  onChange, 
  name,
  scaleLabels,
  required = false 
}: PainScaleProps) => {
  return (
    <div className="form-group">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="pain-scale">
        {[...Array(11)].map((_, i) => (
          <div key={i} className="pain-scale-item">
            <input
              type="radio"
              name={name}
              value={i.toString()}
              checked={value === i.toString()}
              onChange={(e) => onChange(e.target.value)}
              required={required}
            />
            <span>{i}</span>
          </div>
        ))}
      </div>
      {scaleLabels && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '0.8rem', 
          color: 'var(--color-gray-600)', 
          marginTop: '0.5rem' 
        }}>
          <span>{scaleLabels.low}</span>
          <span>{scaleLabels.high}</span>
        </div>
      )}
    </div>
  );
};