import { useState, type ReactNode } from 'react';
import styles from './Navbar.module.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageToggle } from '@/shared/components/LanguageToggle/LanguageToggle';
import { useTranslation } from 'react-i18next';

export interface NavLink {
  href: string;
  label: string;
  icon?: ReactNode;
}

interface NavbarProps {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  links?: NavLink[];
}

export function Navbar({ title, icon: IconComponent, links = [] }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const closeMenu = () => setIsMenuOpen(false);

  const translatedLinks = links.map((link) => ({
    ...link,
    label: t(link.label),
  }));

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {IconComponent && (
            <a
              className={styles.logoLink}
              href="https://stm-labs.ru/ru/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <IconComponent className={styles.logo} />
            </a>
          )}
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.utilsContainer}>
          <div className={styles.langToggleContainer}>
            <LanguageToggle />
          </div>
          <div className={styles.themeToggleContainer}>
            <ThemeToggle />
          </div>
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('navbar.button')}
          >
            ☰
          </button>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
            {translatedLinks.map((link) => (
              <a
                className={styles.navLinkItem}
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                {link.icon && <span>{link.icon}</span>}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
