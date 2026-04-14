import styles from './Footer.module.css';

interface FooterProps {
  caption: string;
  links?: Array<{ href: string; label: string }>;
}

export const Footer = ({ caption, links = [] }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerCaption}>
          © {new Date().getFullYear()} {caption}
        </p>
        {links.length > 0 && (
          <div className={styles.footerLinks}>
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};
