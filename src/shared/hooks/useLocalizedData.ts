import { useTranslation } from 'react-i18next';

export function useLocalizedData() {
  const { t } = useTranslation();

  const getRoleName = (role: string): string => {
    const roleKey = `userTable.roles.${role}`;
    const translation = t(roleKey);
    return translation !== roleKey ? translation : role;
  };

  const getStatusName = (status: string): string => {
    const statusKey = `userTable.statuses.${status}`;
    const translation = t(statusKey);
    return translation !== statusKey ? translation : status;
  };

  return { getRoleName, getStatusName };
}
