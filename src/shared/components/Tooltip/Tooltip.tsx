import { useState, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  positionY?: 'top' | 'bottom' | 'center';
  positionX?: 'left' | 'right' | 'center';
  offsetX?: number;
  offsetY?: number;
  delay?: number;
}

export function Tooltip({
  children,
  content,
  positionY = 'top',
  positionX = 'right',
  offsetX = 10,
  offsetY = 10,
  delay = 300,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const timeoutRef = useRef<number | null>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      if (childRef.current) {
        const rect = childRef.current.getBoundingClientRect();
        const { top, left } = calculatePosition(rect, positionY, positionX, offsetX, offsetY);
        setCoords({ top, left });
        setIsVisible(true);
      }
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  };

  const calculatePosition = (
    rect: DOMRect,
    posY: 'top' | 'bottom' | 'center',
    posX: 'left' | 'right' | 'center',
    offX: number,
    offY: number
  ): { top: number; left: number } => {
    let top = 0;
    let left = 0;

    switch (posY) {
      case 'top':
        top = rect.top - offY;
        break;
      case 'bottom':
        top = rect.bottom + offY;
        break;
      case 'center':
        top = rect.top + rect.height / 2;
        break;
    }

    switch (posX) {
      case 'left':
        left = rect.left - offX;
        break;
      case 'right':
        left = rect.right + offX;
        break;
      case 'center':
        left = rect.left + rect.width / 2;
        break;
    }

    return { top, left };
  };

  const getTransform = (): string => {
    const transforms = {
      top_left: 'translate(-100%, -100%)',
      top_center: 'translate(-50%, -100%)',
      top_right: 'translate(0, -100%)',
      bottom_left: 'translate(-100%, 0)',
      bottom_center: 'translate(-50%, 0)',
      bottom_right: 'translate(0, 0)',
      center_left: 'translate(-100%, -50%)',
      center_center: 'translate(-50%, -50%)',
      center_right: 'translate(0, -50%)',
    };

    return transforms[`${positionY}_${positionX}`] || 'translate(-50%, -50%)';
  };

  return (
    <>
      <div
        ref={childRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>

      {isVisible &&
        createPortal(
          <div
            className="tooltip"
            style={{
              position: 'fixed',
              top: coords.top,
              left: coords.left,
              transform: getTransform(),
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
}
