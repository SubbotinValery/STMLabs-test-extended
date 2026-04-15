import { useLanguage } from '@/shared/context/LanguageContext/useLanguage';
import { useTranslation } from 'react-i18next';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <button
      className={styles.toggle}
      onClick={toggleLanguage}
      aria-label={t('language.toggle')}
      title={t('language.toggle')}
    >
      <span className={styles.langCode}>{language.toUpperCase()}</span>
    </button>
  );
}
