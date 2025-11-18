'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from './SidebarContext';

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function GalleryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export default function AICharactersNavigation() {
  const pathname = usePathname();
  const { isExpanded, setIsExpanded } = useSidebar();

  const navItems = [
    { href: '/ai-characters', label: 'Home', icon: <HomeIcon /> },
    { href: '/ai-characters/character-library', label: 'Character Library', icon: <GalleryIcon /> },
    { href: '/ai-characters/blog', label: 'Blog', icon: <BlogIcon /> },
  ];

  const isActive = (href: string) => {
    if (href === '/ai-characters') {
      return pathname === '/ai-characters';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      onClick={() => {
        if (isExpanded) {
          setIsExpanded(false);
        } else {
          setIsExpanded(true);
        }
      }}
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out cursor-pointer dark:border-gray-800 dark:bg-black ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      {/* Hamburger button */}
      <div className="flex flex-col gap-1 px-2 pt-4 pb-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="flex items-center rounded-lg py-2.5 text-gray-700 dark:text-gray-300"
          aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
        >
          <div className="flex h-5 w-12 shrink-0 items-center justify-center">
            <HamburgerIcon isOpen={isExpanded} />
          </div>
        </button>
      </div>

      {/* Navigation items */}
      <div className="mt-[50px] flex flex-col gap-1 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center rounded-lg py-2.5 transition-colors ${
              isActive(item.href)
                ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex h-5 w-12 shrink-0 items-center justify-center">
              {item.icon}
            </div>
            <span
              className={`whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                isExpanded
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2 w-0 overflow-hidden'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto px-4 pb-6">
        <a
          href="https://cecilialopez.dev/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`text-xs text-gray-500 transition-all duration-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 ${
            isExpanded
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-2 w-0 overflow-hidden'
          }`}
        >
          cecilialopez.dev
        </a>
      </div>
    </nav>
  );
}