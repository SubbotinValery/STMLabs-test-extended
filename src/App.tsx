import { MainLayout } from './layouts/MainLayout/MainLayout';
import { UserTable } from './features/users/components/UserTable';

export function App() {
  return (
    <MainLayout>
      <UserTable />
    </MainLayout>
  );
}
