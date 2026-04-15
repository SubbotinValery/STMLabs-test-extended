import { useState } from 'react';
import type { ReactNode } from 'react';
import styles from './Input.module.css';
import i18n from '@/shared/config/i18n';

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
  placeholder = i18n.t('input.placeholder'),
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
    <div className={`${styles.container} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={`${styles.inputWrapper} ${error ? styles.error : ''}`}>
        {icon && <span className={styles.icon}>{icon}</span>}

        <input
          type={type}
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
        />

        {showClearButton && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
            aria-label={i18n.t('input.clearLabel')}
          >
            {iconClear ? iconClear : '✕'}
          </button>
        )}
      </div>

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
