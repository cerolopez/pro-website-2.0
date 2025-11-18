'use client';

import { useState } from 'react';
import { Character } from '@/lib/characters';
import Image from 'next/image';

interface ImageGenerationInterfaceProps {
  character: Character;
  currentMode: 'chat' | 'image';
  onModeChange: (mode: 'chat' | 'image') => void;
}

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
}

function ChatBubbleIcon() {
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

function ImageIcon() {
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

export default function ImageGenerationInterface({ character, currentMode, onModeChange }: ImageGenerationInterfaceProps) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);

  const handleGenerate = async () => {
    if (!input.trim() || isLoading) return;

    const prompt = input.trim();
    setIsLoading(true);

    try {
      // TODO: Replace with actual API endpoint for image generation
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/generate-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          characterId: character.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url: data.imageUrl || 'https://via.placeholder.com/512',
        prompt,
      };

      setGeneratedImages((prev) => [newImage, ...prev]);
      setInput('');
    } catch (error) {
      console.error('Error generating image:', error);
      // For now, show a placeholder image
      const placeholderImage: GeneratedImage = {
        id: Date.now().toString(),
        url: 'https://via.placeholder.com/512',
        prompt,
      };
      setGeneratedImages((prev) => [placeholderImage, ...prev]);
      setInput('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="flex h-full flex-col bg-white dark:bg-black">
      {/* Generated Images Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {isLoading && (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 dark:border-gray-600 dark:border-t-gray-100" />
              <p className="text-gray-500 dark:text-gray-400">Generating image...</p>
            </div>
          </div>
        )}

        {generatedImages.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {generatedImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900"
              >
                <Image
                  src={image.url}
                  alt={image.prompt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-xs text-white line-clamp-2">{image.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-black">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
          className="relative flex items-center gap-2"
        >
          {/* Mode Toggle Icons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onModeChange('chat')}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                currentMode === 'chat'
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
              }`}
              aria-label="Chat mode"
              aria-pressed={currentMode === 'chat'}
            >
              <ChatBubbleIcon />
            </button>
            <button
              type="button"
              onClick={() => onModeChange('image')}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                currentMode === 'image'
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
              }`}
              aria-label="Image generation mode"
              aria-pressed={currentMode === 'image'}
            >
              <ImageIcon />
            </button>
          </div>
          
          {/* Input Field */}
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Generate images with ${character.name}`}
              disabled={isLoading}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-base text-black placeholder-gray-400 focus:border-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:hover:bg-gray-200"
              aria-label="Generate image"
            >
              <svg
                className="h-4 w-4 text-white dark:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

