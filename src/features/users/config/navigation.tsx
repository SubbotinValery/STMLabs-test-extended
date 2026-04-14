import type { NavLink } from '@/shared/components/Navbar/Navbar';
import { GitHubIcon } from '@/assets/icons/GitHubIcon';
import { TelegramIcon } from '@/assets/icons/TelegramIcon';

export const navLinks: NavLink[] = [
  {
    href: 'https://github.com/SubbotinValery',
    label: 'GitHub',
    icon: <GitHubIcon className="nav-icon" />,
  },
  {
    href: 'https://t.me/valerysubbotin',
    label: 'Telegram',
    icon: <TelegramIcon className="nav-icon" />,
  },
];
