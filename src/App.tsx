import { MainLayout } from './layouts/MainLayout/MainLayout';
import { UserTable } from './features/users/components/UserTable';
import { ThemeProvider } from './shared/context/ThemeProvider';

export function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <UserTable />
      </MainLayout>
    </ThemeProvider>
  );
}
