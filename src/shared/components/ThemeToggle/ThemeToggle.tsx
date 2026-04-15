import { useTheme } from '@/shared/context/ThemeContext/useTheme';
import { SunIcon } from '@/assets/icons/SunIcon';
import { MoonIcon } from '@/assets/icons/MoonIcon';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
