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
      w-full h-12
      bg-navy
      rounded-lg
      px-3
      shadow-neumorphic
      transition-all duration-200
    `}
  >
    <div className="flex items-end mr-2">
      <span className="text-white text-sm font-bold leading-tight">Grid</span>
      <span className="text-[10px] text-gray-400 ml-1 mb-0">
        <span className="xs:inline sm:hidden">(xs)</span>
        <span className="hidden sm:inline md:hidden">(sm)</span>
        <span className="hidden md:inline lg:hidden">(md)</span>
        <span className="hidden lg:inline">(lg)</span>
      </span>
    </div>

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
