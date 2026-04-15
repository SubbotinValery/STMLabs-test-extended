import { useTheme } from '@/shared/context/ThemeContext/useTheme';
import { useTranslation } from 'react-i18next';
import { SunIcon } from '@/assets/icons/SunIcon';
import { MoonIcon } from '@/assets/icons/MoonIcon';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
      title={theme === 'light' ? t('theme.toggleToDark') : t('theme.toggleToLight')}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
