export const ruTranslations = {
  userSearch: {
    searchPlaceholder: 'Поиск по имени пользователя...',
  },
  userTable: {
    noData: 'Список пользователей пуст',
    notFound: 'Пользователи не найдены',
    columns: {
      name: 'Имя',
      avatar: 'Аватар',
      location: 'Местоположение',
      phone: 'Телефон',
      registeredDate: 'Дата регистрации',
      email: 'Email',
    },
  },
  userApi: {
    error: 'Не удалось загрузить данные. Проверьте интернет и попробуйте снова.',
  },
  error: {
    msg: 'Ошибка',
  },
  input: {
    placeholder: 'Введите текст...',
    clearLabel: 'Очистить поле',
  },
  navbar: {
    button: 'Меню',
  },
  table: {
    noData: 'Нет данных',
  },
  date: {
    error: 'Неверная дата',
  },
  theme: {
    light: 'Светлая тема',
    dark: 'Тёмная тема',
    toggle: 'Переключить тему',
    toggleToLight: 'Переключить на светлую тему',
    toggleToDark: 'Переключить на тёмную тему',
  },
  language: {
    ru: 'Русский',
    en: 'English',
    toggle: 'Сменить язык',
  },
};

export type TranslationsType = typeof ruTranslations;
