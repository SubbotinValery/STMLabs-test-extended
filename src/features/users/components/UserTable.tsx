import { useMemo } from 'react';
import { Table } from '@/shared/components/Table/Table';
import { useUsers } from '../hooks/useUsers';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
import { UserSearch } from './UserSearch';
import { userTableColumns } from '../config/userTableColumns';

export function UserTable() {
  const { users, loading, error } = useUsers();
  const { searchQuery, debouncedQuery, setSearchQuery } = useDebouncedSearch(300);

  const filteredUsers = useMemo(() => {
    if (!debouncedQuery.trim()) return users;

    const query = debouncedQuery.toLowerCase().trim();
    return users.filter(
      (user) => user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
    );
  }, [users, debouncedQuery]);

  return (
    <div className="user-table-container">
      <UserSearch value={searchQuery} onChange={setSearchQuery} disabled={loading} />
      <Table
        columns={userTableColumns}
        data={filteredUsers}
        loading={loading}
        error={error}
        emptyMessage="Пользователи не найдены"
      />
    </div>
  );
}
