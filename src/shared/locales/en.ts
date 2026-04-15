import type { TranslationsType } from './ru';

export const enTranslations: TranslationsType = {
  userSearch: {
    searchPlaceholder: 'Search by username...',
  },
  userTable: {
    noData: 'User list is empty',
    notFound: 'Users not found',
    columns: {
      name: 'Name',
      avatar: 'Avatar',
      location: 'Location',
      phone: 'Phone',
      registeredDate: 'Registration date',
      email: 'Email',
    },
  },
  userApi: {
    error: 'Failed to load data. Check your internet connection and try again.',
  },
  error: {
    msg: 'Error',
  },
  input: {
    placeholder: 'Enter text...',
    clearLabel: 'Clear field',
  },
  navbar: {
    button: 'Menu',
  },
  table: {
    noData: 'No data',
  },
  date: {
    error: 'Invalid date',
  },
};
