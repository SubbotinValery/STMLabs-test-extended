import { MainLayout } from './layouts/MainLayout/MainLayout';
import { UserTable } from './features/users/components/UserTable';
import { ThemeProvider } from './shared/context/ThemeContext';
import { LanguageProvider } from './shared/context/LanguageContext';

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainLayout>
          <UserTable />
        </MainLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
