'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function ConditionalNavigation() {
  const pathname = usePathname();
  
  // Hide main navigation for /ai-characters routes
  if (pathname?.startsWith('/ai-characters')) {
    return null;
  }
  
  return <Navigation />;
}
