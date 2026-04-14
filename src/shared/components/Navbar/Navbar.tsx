import { useState, type ReactNode } from 'react';
import styles from './Navbar.module.css';

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

  const closeMenu = () => setIsMenuOpen(false);

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

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          ☰
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          {links.map((link) => (
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
    </nav>
  );
}
