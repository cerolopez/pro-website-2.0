'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  isHtml?: boolean;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLFormElement>(null);
  const previousHasMessagesRef = useRef(false);

  const scrollToBottom = () => {
    // Only scroll within the messages container, not the page
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll to bottom of messages container when messages change
    // This only scrolls within the container, not the page
    if (messages.length > 0 && messagesContainerRef.current) {
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
      });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const hasMessages = messages.length > 0 || isLoading;
    // When chat container first appears, maintain input position
    if (hasMessages && !previousHasMessagesRef.current && inputContainerRef.current) {
      const inputRect = inputContainerRef.current.getBoundingClientRect();
      const inputTop = inputRect.top + window.scrollY;
      
      // Use requestAnimationFrame for smoother positioning
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (inputContainerRef.current) {
            const newInputRect = inputContainerRef.current.getBoundingClientRect();
            const newInputTop = newInputRect.top + window.scrollY;
            const scrollDiff = newInputTop - inputTop;
            
            // Adjust scroll to keep input in same position
            if (scrollDiff > 0) {
              window.scrollTo({ top: window.scrollY - scrollDiff, behavior: 'auto' });
            }
          }
        });
      });
    }
    previousHasMessagesRef.current = hasMessages;
  }, [messages.length, isLoading]);

  useEffect(() => {
    // Close modal on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from the API');
      }

      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Sorry, I could not process your request.',
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

  const hasMessages = messages.length > 0 || isLoading;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {hasMessages && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col mb-4 transition-all duration-300" style={{ height: '300px' }}>
          {/* Messages Container */}
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? 'bg-black dark:bg-white text-white dark:text-black text-right'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-left'
                  }`}
                >
                  {message.isHtml ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: message.text }}
                      className={`text-sm [&_p]:mb-2 [&_p]:last:mb-0 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:mb-2 [&_li]:mb-1 ${message.isUser ? 'text-right' : 'text-left'}`}
                    />
                  ) : (
                    <p className={`text-sm whitespace-pre-wrap ${message.isUser ? 'text-right' : 'text-left'}`}>{message.text}</p>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
                  <div className="flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse-dot" style={{ animationDelay: '0s' }}></span>
                    <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse-dot" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse-dot" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Input Area */}
      <form ref={inputContainerRef} onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about my experience"
          disabled={isLoading}
          className="w-full px-6 py-4 pr-14 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Submit question"
        >
          <svg
            className="w-4 h-4 text-white dark:text-black"
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
      </form>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center w-full hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer"
      >
        Learn more about this chatbot
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-black dark:text-white pt-8 pl-8">
                Meet Behalf Bot 🤖
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 text-left px-8 pb-8">
              <p className="text-left">
                Behalf Bot is a GPT-4 chatbot instructed to answer career questions on behalf of Cecilia. Its responses are curated specifically for recruiters and hiring managers.
              </p>
              <div className="text-left">
                <p className="font-semibold mb-2 text-black dark:text-white text-left">
                  Here are some examples of questions you can ask:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-left">
                  <li className="text-left">Can you tell me about Cecilia's experience with prompt engineering?</li>
                  <li className="text-left">Does Cecilia have experience leading projects?</li>
                  <li className="text-left">What are some of Cecilia's biggest strengths?</li>
                  <li className="text-left">Can you briefly summarize Cecilia's employment history?</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic text-left">
                This bot does not store user data.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

