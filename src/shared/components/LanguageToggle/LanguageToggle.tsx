import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/shared/context/LanguageContext/useLanguage';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className={styles.toggle} onClick={toggleLanguage} aria-label={t('language.toggle')}>
      <span className={styles.langCode}>{language.toUpperCase()}</span>
    </button>
  );
}
