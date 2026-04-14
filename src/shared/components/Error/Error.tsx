import { type ReactNode } from 'react';

interface ErrorProps {
  children?: ReactNode;
}

export function Error({ children }: ErrorProps) {
  return <div className="error">{children || 'Ошибка'}</div>;
}
