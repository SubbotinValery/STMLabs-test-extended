import { Table, type Column } from '@/shared/components/Table/Table';
import { useUsers } from '../hooks/useUsers';
import type { User } from '../types/user.types';

const columns: Column<User>[] = [
  { key: 'name', label: 'Имя' },
  {
    key: 'avatarThumb',
    label: 'Аватар',
    render: (value) => <img src={value as string} alt="Avatar" />,
  },
  { key: 'location', label: 'Местоположение' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Телефон' },
  { key: 'registeredDate', label: 'Дата регистрации' },
];

export function UserTable() {
  const { users, loading, error } = useUsers();

  return (
    <div className="user-table-container">
      <Table
        columns={columns}
        data={users}
        loading={loading}
        error={error}
        emptyMessage="Пользователи не найдены"
      />
    </div>
  );
}
