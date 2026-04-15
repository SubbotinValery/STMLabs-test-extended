import type { User, ApiUser, ApiResponse } from '../types/user.types';
import { formatDate } from '@/shared/utils/formatDate';
import i18n from '@/shared/config/i18n';

const API_URL = 'https://randomuser.me/api/?results=15';

function transformUser(apiUser: ApiUser): User {
  return {
    id: apiUser.login.uuid,
    name: `${apiUser.name.first} ${apiUser.name.last}`,
    avatarThumb: apiUser.picture.thumbnail,
    avatarLarge: apiUser.picture.large,
    location: `${apiUser.location.state} ${apiUser.location.city}`,
    registeredDate: formatDate(apiUser.registered.date),
    email: apiUser.email,
    phone: apiUser.phone,
  };
}

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(i18n.t('userApi.error'));
    }

    const data: ApiResponse = await response.json();
    return data.results.map(transformUser);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error(i18n.t('userApi.error'));
  }
}
