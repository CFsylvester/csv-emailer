'use client';
import React from 'react';

const Overlay: React.FC = () => (
  <div className="fixed inset-0 z-10 pointer-events-none grid-layout">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="bg-red-500 opacity-10 min-h-screen" />
    ))}
  </div>
);

export default Overlay;
