import { type ReactNode } from 'react';
import { Navbar } from '@/shared/components/Navbar/Navbar';
import { Footer } from '@/shared/components/Footer/Footer';
import { STMLabsIcon } from '@/assets/icons/STMLabsIcon';
import { navLinks } from '@/features/users/config/navigation';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar title="STMLabs-test" icon={STMLabsIcon} links={navLinks} />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer caption="STMLabs-test by Valery Subbotin" />
    </div>
  );
}
