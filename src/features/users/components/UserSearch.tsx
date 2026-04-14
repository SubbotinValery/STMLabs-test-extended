import { Input } from '@/shared/components/Input/Input';

interface UserSearchProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function UserSearch({ value, onChange, disabled = false }: UserSearchProps) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder="Поиск по имени пользователя..."
      clearable
      disabled={disabled}
      className="user-search"
    />
  );
}
