import { useState } from 'react';
import type { ReactNode } from 'react';

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'search';
  disabled?: boolean;
  clearable?: boolean;
  iconClear?: ReactNode | '✕';
  className?: string;
  icon?: ReactNode;
  error?: string;
  onClear?: () => void;
}

export function Input({
  value = '',
  onChange,
  placeholder = 'Введите текст...',
  label,
  type = 'text',
  disabled = false,
  clearable = true,
  iconClear = '✕',
  className = '',
  icon,
  error,
  onClear,
}: InputProps) {
  const [internalValue, setInternalValue] = useState(value);

  const isControlled = value !== undefined && onChange !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue('');
    }
    onChange?.('');
    onClear?.();
  };

  const showClearButton = clearable && currentValue.length > 0 && !disabled;

  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}

      <div className={`input-container ${error ? 'has-error' : ''}`}>
        <input
          type={type}
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className="input-field"
        />

        {showClearButton && (
          <button
            type="button"
            onClick={handleClear}
            className="input-clear"
            aria-label="Очистить поле"
          >
            <span className="input-icon-clear">{iconClear}</span>
          </button>
        )}

        {icon && <span className="input-icon">{icon}</span>}
      </div>

      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
