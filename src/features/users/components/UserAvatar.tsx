import { Tooltip } from '@/shared/components/Tooltip/Tooltip';
import styles from './UserAvatar.module.css';

interface UserAvatarProps {
  thumbnailUrl: string;
  mediumUrl: string;
  name: string;
}

export function UserAvatar({ thumbnailUrl, mediumUrl, name }: UserAvatarProps) {
  return (
    <Tooltip
      positionX="center"
      positionY="center"
      content={
        <div>
          <img src={mediumUrl} alt={name} className={styles.userAvatar} />
        </div>
      }
    >
      <img src={thumbnailUrl} alt={name} />
    </Tooltip>
  );
}
