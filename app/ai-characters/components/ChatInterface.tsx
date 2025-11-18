'use client';

import { useState, useRef, useEffect } from 'react';
import { Character } from '@/lib/characters';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  isHtml?: boolean;
}

interface ChatInterfaceProps {
  character: Character;
  currentMode: 'chat' | 'image';
  onModeChange: (mode: 'chat' | 'image') => void;
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

export default function ChatInterface({ character, currentMode, onModeChange }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesContainerRef.current) {
      requestAnimationFrame(() => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const messageText = input.trim();
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${character.apiEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          message: messageText,
          characterId: character.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from the API');
      }

      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || `Sorry, I couldn't process your request.`,
        isUser: false,
        isHtml: true,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again later.',
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-full flex-col bg-white dark:bg-black">
      {/* Messages Container */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.isUser
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
              }`}
            >
              {message.isHtml ? (
                <div
                  dangerouslySetInnerHTML={{ __html: message.text }}
                  className={`text-sm [&_p]:mb-2 [&_p]:last:mb-0 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:mb-2 [&_li]:mb-1 ${
                    message.isUser ? 'text-right' : 'text-left'
                  }`}
                />
              ) : (
                <p className={`text-sm whitespace-pre-wrap ${message.isUser ? 'text-right' : 'text-left'}`}>
                  {message.text}
                </p>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
              <div className="flex gap-1 items-center">
                <span
                  className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0s' }}
                />
                <span
                  className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                />
                <span
                  className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-black">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="relative flex items-center gap-2"
        >
          {/* Mode Toggle Icons */}
          {/* <div className="flex items-center gap-1">
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
          </div> */}
          
          {/* Input Field */}
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Chat with ${character.name}`}
              disabled={isLoading}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-base text-black placeholder-gray-400 focus:border-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:hover:bg-gray-200"
              aria-label="Send message"
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

