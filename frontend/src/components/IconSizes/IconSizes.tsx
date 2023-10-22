import React, { ReactNode } from 'react';
import Starfilled from '../../icons/Starfilled/Starfilled';

interface IconSizesProps {
  size?: 'large' | 'inherit' | 'medium' | 'small';
  className?: string;
  icon?: ReactNode;
}

const IconSizes: React.FC<IconSizesProps> = ({ size, className, icon = <Starfilled className="star-filled" opacity="0.6"/> }) => {
  return <div className={`icon-sizes ${className}`}>{icon}</div>;
};

export default IconSizes;
