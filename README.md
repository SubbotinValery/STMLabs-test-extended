<a id="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/SubbotinValery/STMLabs-test">
    <img src="https://stm-labs.ru/assets/images/stm-logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">STMLabs Test Task</h3>

  <p align="center">
    Тестовое задание на позицию Junior Frontend Developer
    <br />
    <br />
    <a href="https://subbotinvalery.github.io/STMLabs-test/"><strong>✨ Открыть демо »</strong></a>
    <br />
  </p>
</div>

<details>
  <summary>📖 Содержание</summary>
  <ol>
    <li><a href="#о-проекте">О проекте</a></li>
    <li><a href="#функциональность">Функциональность</a></li>
    <li><a href="#технологии">Технологии</a></li>
    <li><a href="#структура-проекта">Структура проекта</a></li>
    <li><a href="#установка-и-запуск">Установка и запуск</a></li>
  </ol>
</details>

## О проекте

Это SPA для отображения, фильтрации и просмотра деталей случайных пользователей. Приложение разработано в рамках тестового задания и реализует все поставленные требования.

Проект построен на современном стеке (React 19, TypeScript, Vite) с упором на модульную архитектуру (Feature-Sliced Design), чистоту кода и производительность. Особое внимание уделено соблюдению всех пунктов ТЗ, включая собственную реализацию debounce для поля поиска и кастомный тултип для аватара.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Функциональность

✅ **Главный экран / Таблица пользователей**

- Загрузка и отображение 15 случайных пользователей с сервиса `randomuser.me`.
- Индикатор загрузки во время выполнения запроса.
- Таблица с колонками: **Имя**, **Фото**, **Адрес**, **Email**, **Телефон**, **Дата регистрации**.

✅ **Фильтрация**

- Поле ввода для фильтрации пользователей по полному имени (имя + фамилия).
- Фильтрация происходит на клиентской стороне.
- **Реализация Debounce**: Задержка при вводе для оптимизации производительности, реализованная вручную (кастомный хук) без использования `useState`, как того требует ТЗ.
- Кнопка сброса фильтра.
- Отображение сообщения, если по запросу ничего не найдено.

✅ **Интерактивность**

- При наведении на миниатюру (thumbnail) пользователя появляется кастомный тултип с фотографией в высоком разрешении.

✅ **Архитектура и инфраструктура**

- **Строгая типизация:** 100% кода написано на TypeScript.
- **Модульная архитектура:** Код разделен на фичи (`features`), переиспользуемые компоненты (`shared`) и макеты (`layouts`).
- **Quality Gates:** Настроены ESLint, Prettier, Husky и Commitlint для поддержания чистоты и консистентности кода.
- **CI/CD:** Автоматический деплой на GitHub Pages через GitHub Actions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Технологии

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?logo=css-modules&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.0-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.0-F7B93E?logo=prettier&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Структура проекта

```
src/
├── app/                # Инициализация приложения
├── assets/             # Статические ресурсы
│   └── icons/
├── features/           # Бизнес-фичи приложения
│   └── users/          # Фича "Пользователи"
│       ├── components/ # Компоненты фичи
│       ├── config/     # Конфигурация таблицы
│       ├── hooks/      # Хуки фичи
│       ├── services/   # API-сервисы
│       ├── types/      # Типы данных
│       └── utils/      # Утилиты
├── layouts/            # Компоненты макетов
├── shared/             # Переиспользуемые модули
│   ├── components/     # Общие UI-компоненты
│   ├── hooks/          # Общие хуки
│   ├── styles/         # Глобальные стили
│   └── utils/          # Общие утилиты
├── App.tsx
└── main.tsx
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Установка и запуск

### 📋 Предварительные требования

Убедитесь, что у вас установлен [Node.js](https://nodejs.org/) (рекомендуемая версия 20.x или выше) и [npm](https://www.npmjs.com/).

### 🔧 Установка

1.  **Клонируйте репозиторий:**

```bash
    git clone https://github.com/SubbotinValery/STMLabs-test.git
    cd STMLabs-test
```

2.  **Установите зависимости:**

```bash
    npm install
```

▶️ Запуск
Режим разработки: Запустит локальный сервер с Hot Module Replacement (HMR).

```bash
    npm run dev
```

    Приложение будет доступно по адресу http://localhost:5173.

Сборка для продакшена: Создаст оптимизированную сборку в папке dist.

```bash
    npm run build
```

Проверка кода (Lint):

```bash
    npm run lint
```

    Для автоматического исправления:

```bash
    npm run lint:fix
```

Форматирование кода (Prettier):

    npm run format

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
