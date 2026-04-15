import { type ReactNode } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { Error } from '../Error/Error';
import styles from './Table.module.css';
import i18n from '@/shared/config/i18n';

export interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (value: unknown, item: T) => ReactNode;
}

interface TableProps<T extends { id: string | number }> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  error?: string | null;
  emptyMessage?: string;
}

export function Table<T extends { id: string | number }>({
  columns,
  data,
  loading = false,
  error = null,
  emptyMessage = i18n.t('table.noData'),
}: TableProps<T>) {
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <Error>{error}</Error>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.emptyMessage}>{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key.toString()}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((col) => (
                <td
                  key={col.key.toString()}
                  data-label={col.label}
                  data-column={col.key.toString()}
                >
                  {col.render
                    ? col.render(item[col.key as keyof T], item)
                    : (item[col.key as keyof T] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
