'use client';
import React from 'react';
import Icon from '@/components/Icons';

type GridToggleProps = {
  on: boolean;
  onChange: (on: boolean) => void;
  className?: string;
};

const GridToggle: React.FC<GridToggleProps> = ({ on, onChange }) => (
  <button
    onClick={() => onChange(!on)}
    className={`
        flex items-center
        w-full h-10
        bg-navy
        rounded-lg
        px-2
        shadow-neumorphic
        transition-all duration-200
      `}
  >
    <span className="text-white text-sm font-bold mr-2">Grid</span>

    <div
      className={`
        flex items-center justify-center
        w-8 h-8
        rounded-full
        ml-auto
        bg-deepNavy
        shadow-neumorphic-inset
      `}
    >
      <Icon type="grid" filled={on} size={18} />
    </div>
  </button>
);

export default GridToggle;
