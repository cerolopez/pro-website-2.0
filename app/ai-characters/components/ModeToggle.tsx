'use client';

interface ModeToggleProps {
  currentMode: 'chat' | 'image';
  onModeChange: (mode: 'chat' | 'image') => void;
}

function ChatBubbleIcon({ isActive }: { isActive: boolean }) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ImageIcon({ isActive }: { isActive: boolean }) {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

export default function ModeToggle({ currentMode, onModeChange }: ModeToggleProps) {
  return (
    <div className="flex items-center justify-center gap-2 bg-white px-6 py-2 dark:bg-black">
      <button
        onClick={() => onModeChange('chat')}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
          currentMode === 'chat'
            ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        }`}
        aria-label="Chat mode"
        aria-pressed={currentMode === 'chat'}
      >
        <ChatBubbleIcon isActive={currentMode === 'chat'} />
      </button>
      <button
        onClick={() => onModeChange('image')}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
          currentMode === 'image'
            ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        }`}
        aria-label="Image generation mode"
        aria-pressed={currentMode === 'image'}
      >
        <ImageIcon isActive={currentMode === 'image'} />
      </button>
    </div>
  );
}

