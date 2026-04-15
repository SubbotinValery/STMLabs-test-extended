import { type ReactNode } from 'react';
import styles from './Error.module.css';
import i18n from '@/shared/config/i18n';

interface ErrorProps {
  children?: ReactNode;
}

export function Error({ children }: ErrorProps) {
  return <div className={styles.error}>{children || i18n.t('error.msg')}</div>;
}
