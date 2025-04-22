import '@/styles/globals.scss';
import { ReactNode } from 'react';

const devMode = true; // 👈 Set to true to enable grid overlay

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        
        {/* DEV GRID OVERLAY */}
        {devMode && (
          <div className="fixed inset-0 z-10 pointer-events-none layout">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-red-500 opacity-10 min-h-screen"
              />
            ))}
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="z-0 layout">
          {children}
        </div>

      </body>
    </html>
  );
};

export default RootLayout;