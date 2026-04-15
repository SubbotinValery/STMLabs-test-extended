import { useMemo } from 'react';
import { Table } from '@/shared/components/Table/Table';
import { useUsers } from '../hooks/useUsers';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
import { UserSearch } from './UserSearch';
import { filterUsers } from '../utils/filterUsers';
import { useTranslation } from 'react-i18next';
import type { Column } from '@/shared/components/Table/Table';
import type { User } from '../types/user.types';
import { UserAvatar } from '../components/UserAvatar';

export function UserTable() {
  const { users, loading, error } = useUsers();
  const { searchQuery, debouncedQuery, setSearchQuery } = useDebouncedSearch(300);
  const { t } = useTranslation();

  const userTableColumns: Column<User>[] = [
    { key: 'name', label: t('userTable.columns.name') },
    {
      key: 'avatarThumb',
      label: t('userTable.columns.avatar'),
      render: (value, item) => (
        <UserAvatar thumbnailUrl={value as string} mediumUrl={item.avatarLarge} name={item.name} />
      ),
    },
    { key: 'location', label: t('userTable.columns.location') },
    { key: 'email', label: t('userTable.columns.email') },
    { key: 'phone', label: t('userTable.columns.phone') },
    { key: 'registeredDate', label: t('userTable.columns.registeredDate') },
  ];

  const filteredUsers = useMemo(() => {
    return filterUsers(users, debouncedQuery);
  }, [users, debouncedQuery]);

  const getEmptyMessage = (): string => {
    if (users.length === 0) return t('userTable.noData');
    if (debouncedQuery) return t('userTable.notFound');
    return t('table.noData');
  };

  return (
    <div className="user-table-container">
      <UserSearch value={searchQuery} onChange={setSearchQuery} disabled={loading} />
      <Table
        columns={userTableColumns}
        data={filteredUsers}
        loading={loading}
        error={error}
        emptyMessage={getEmptyMessage()}
      />
    </div>
  );
}
