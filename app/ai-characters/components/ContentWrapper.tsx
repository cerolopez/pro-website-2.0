'use client';

import { useSidebar } from './SidebarContext';

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { isExpanded } = useSidebar();

  return (
    <div
      className={`min-h-screen bg-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] dark:bg-black ${
        isExpanded ? 'ml-64' : 'ml-16'
      }`}
    >
      {children}
    </div>
  );
}
