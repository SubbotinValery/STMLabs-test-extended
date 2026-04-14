import type { ReactNode } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { Error } from '../Error/Error';

export interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (value: unknown, item: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  error?: string | null;
  emptyMessage?: string;
}

export function Table<T>({
  columns,
  data,
  loading = false,
  error = null,
  emptyMessage = 'Нет данных',
}: TableProps<T>) {
  if (loading) {
    return (
      <div className="table-loading">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-error">
        <Error>{error}</Error>
      </div>
    );
  }

  if (data.length === 0) {
    return <div className="table-empty">{emptyMessage}</div>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key.toString()}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key.toString()}>
                {col.render
                  ? col.render(item[col.key as keyof T], item)
                  : (item[col.key as keyof T] as ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
