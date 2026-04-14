import { type ReactNode } from 'react';
import styles from './Error.module.css';

interface ErrorProps {
  children?: ReactNode;
}

export function Error({ children }: ErrorProps) {
  return <div className={styles.error}>{children || 'Ошибка'}</div>;
}
