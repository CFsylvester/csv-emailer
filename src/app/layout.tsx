'use client';
import '@/styles/globals.scss';
import { ReactNode, useState } from 'react';

// components
import GridToggle from '@/components/GridToggle';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [showGrid, setShowGrid] = useState(false);
  const devMode = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body>
        {/* DEV GRID TOGGLE */}
        {devMode && (
          <div className="fixed bottom-8 right-8 z-20">
            <GridToggle on={showGrid} onChange={setShowGrid} />
          </div>
        )}

        {/* DEV GRID OVERLAY */}
        {showGrid && (
          <div className="fixed inset-0 z-10 pointer-events-none layout">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-red-500 opacity-10 min-h-screen" />
            ))}
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="z-0 layout">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
