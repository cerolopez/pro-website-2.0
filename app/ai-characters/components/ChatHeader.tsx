'use client';

import Image from 'next/image';
import { Character, characters } from '@/lib/characters';
import { useEffect, useRef, useState } from 'react';

interface ChatHeaderProps {
  character: Character;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  onMoreInfo: () => void;
  onSwitchCharacter: (characterId: string) => void;
}

export default function ChatHeader({
  character,
  showDropdown,
  setShowDropdown,
  onMoreInfo,
  onSwitchCharacter,
}: ChatHeaderProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showCharacterMenu, setShowCharacterMenu] = useState(false);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown, setShowDropdown]);

  useEffect(() => {
    // Close dropdown on Escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showDropdown) {
        setShowDropdown(false);
        setShowCharacterMenu(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showDropdown, setShowDropdown]);

  useEffect(() => {
    // Close character sub-menu when main dropdown closes
    if (!showDropdown) {
      setShowCharacterMenu(false);
    }
  }, [showDropdown]);

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-black">
      {/* Character Info */}
      <div className="flex items-center gap-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">{character.name}</h1>
      </div>

      {/* Dropdown Menu */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="More options"
          aria-expanded={showDropdown}
        >
          <svg
            className="h-5 w-5 text-gray-700 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        {/* Dropdown Menu Overlay */}
        {showDropdown && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowDropdown(false)}
            />
            {/* Menu */}
            <div className="absolute right-0 top-12 z-50 w-48 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="py-1">
                <button
                  onClick={onMoreInfo}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  More info
                </button>
                <div className="relative group">
                  <button
                    onClick={() => setShowCharacterMenu(!showCharacterMenu)}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center justify-between"
                  >
                    <span>Switch character</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${showCharacterMenu ? 'rotate-90' : ''} lg:group-hover:rotate-90`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  {/* Character Sub-menu - Show on hover (large screens) or click (all screens) */}
                  <div 
                    className={`block absolute right-full top-0 mr-1 w-48 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 z-[60] transition-opacity duration-200 ${
                      showCharacterMenu 
                        ? 'opacity-100 pointer-events-auto' 
                        : 'opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto'
                    }`}
                  >
                    <div className="py-1">
                      {characters.map((char) => (
                        <button
                          key={char.id}
                          onClick={() => {
                            if (char.id !== character.id) {
                              onSwitchCharacter(char.id);
                              setShowCharacterMenu(false);
                              setShowDropdown(false);
                            }
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center justify-between"
                        >
                          <span>{char.name}</span>
                          {char.id === character.id && (
                            <svg
                              className="h-4 w-4 text-gray-700 dark:text-gray-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

