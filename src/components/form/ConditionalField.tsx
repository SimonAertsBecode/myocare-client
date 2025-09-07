import type { ReactNode } from 'react';

interface ConditionalFieldProps {
  show: boolean;
  children: ReactNode;
}

export const ConditionalField = ({ show, children }: ConditionalFieldProps) => {
  if (!show) return null;

  return (
    <div className="conditional-field">
      {children}
    </div>
  );
};