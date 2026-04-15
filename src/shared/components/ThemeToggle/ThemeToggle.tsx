import { useTheme } from '@/shared/context/useTheme';
import { SunIcon } from '@/assets/icons/SunIcon';
import { MoonIcon } from '@/assets/icons/MoonIcon';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
      title={`Текущая тема: ${theme === 'light' ? 'светлая' : 'тёмная'}`}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
