import { Tooltip } from '@/shared/components/Tooltip/Tooltip';

interface UserAvatarProps {
  thumbnailUrl: string;
  mediumUrl: string;
  name: string;
}

export function UserAvatar({ thumbnailUrl, mediumUrl, name }: UserAvatarProps) {
  return (
    <Tooltip
      content={
        <div className="avatar-tooltip">
          <img src={mediumUrl} alt={name} className="avatar-tooltip-image" />
        </div>
      }
    >
      <img src={thumbnailUrl} alt={name} className="user-avatar" />
    </Tooltip>
  );
}
