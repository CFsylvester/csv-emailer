'use client';

import React from 'react';

// icons
import GridIcon from './GridIcon';

// types
export type IconType = 'grid';

export interface IconProps {
  type: IconType;
  filled?: boolean;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ type, filled = false, className = '', size = 24 }) => {
  // Use a switch statement to return the appropriate icon
  switch (type) {
    case 'grid':
      return <GridIcon filled={filled} className={className} size={size} />;

    default:
      return <></>;
  }
};

export default Icon;
