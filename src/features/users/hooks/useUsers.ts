import { useFetch } from '@/shared/hooks/useFetch';
import { fetchUsers } from '../services/usersApi';
import type { User } from '../types/user.types';

export function useUsers() {
  const { data, loading, error } = useFetch<User[]>(fetchUsers);

  return {
    users: data ?? [],
    loading,
    error,
  };
}
