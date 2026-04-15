import type { Column } from '@/shared/components/Table/Table';
import type { User } from '../types/user.types';
import { UserAvatar } from '../components/UserAvatar';
export const userTableColumns: Column<User>[] = [
  { key: 'name', label: 'Имя' },
  {
    key: 'avatarThumb',
    label: 'Аватар',
    render: (value, item) => (
      <UserAvatar thumbnailUrl={value as string} mediumUrl={item.avatarLarge} name={item.name} />
    ),
  },
  { key: 'location', label: 'Местоположение' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Телефон' },
  { key: 'registeredDate', label: 'Дата регистрации' },
];
