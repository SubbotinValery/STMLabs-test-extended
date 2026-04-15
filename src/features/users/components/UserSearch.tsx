import { Input } from '@/shared/components/Input/Input';
import { useTranslation } from 'react-i18next';

interface UserSearchProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function UserSearch({ value, onChange, disabled = false }: UserSearchProps) {
  const { t } = useTranslation();
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={t('userSearch.searchPlaceholder')}
      clearable
      disabled={disabled}
      className="user-search"
    />
  );
}
