import type { User, ApiUser, ApiResponse } from '../types/user.types';
import { formatDate } from '@/shared/utils/formatDate';

const API_URL = 'https://randomuser.me/api/?results=15';

function transformUser(apiUser: ApiUser): User {
  return {
    id: apiUser.login.uuid,
    name: `${apiUser.name.first} ${apiUser.name.last}`,
    avatarThumb: apiUser.picture.thumbnail,
    avatarMedium: apiUser.picture.medium,
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
      throw new Error(`Не удалось загрузить данные. Проверьте интернет и попробуйте снова.`);
    }

    const data: ApiResponse = await response.json();
    return data.results.map(transformUser);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Не удалось загрузить данные. Проверьте интернет и попробуйте снова.');
  }
}
