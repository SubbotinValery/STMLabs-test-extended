import i18n from '@/shared/config/i18n';

export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    console.warn('Invalid date:', isoString);
    return i18n.t('date.error');
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
