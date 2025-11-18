import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface UpdateCardProps {
  id?: string;
  image: {
    src: string;
    alt: string;
  };
  date?: string;
  title: string;
  titleHref?: string;
  description: string;
  readBlogBtn?: {
    href: string;
  };
  chatBtn?: {
    href: string;
  };
  imageBtn?: {
    href: string;
  };
  expandBtn?: {
    onClick: () => void;
    isExpanded?: boolean;
  };
  readMore?: string | React.ReactNode;
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

function ChatIcon() {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="black"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

export default function UpdateCard({
  id,
  image,
  date,
  title,
  titleHref,
  description,
  readBlogBtn,
  chatBtn,
  imageBtn,
  expandBtn,
  readMore,
}: UpdateCardProps) {
  return (
    <div id={id} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 scroll-mt-16">
      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">
        <div className="relative h-[190px] w-full shrink-0 overflow-hidden rounded-xl md:h-[190px] md:w-[190px]">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-4">
          <div className="space-y-3">
            {date && <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>}
            {titleHref ? (
              <Link href={titleHref}>
                <h3 className="text-xl font-semibold text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
                  {title}
                </h3>
              </Link>
            ) : (
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            )}
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
          {(readBlogBtn || chatBtn || imageBtn || expandBtn) && (
            <div className="flex items-center gap-3">
              {readBlogBtn && (
                <Link
                  href={readBlogBtn.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  aria-label="Read blog"
                >
                  <BlogIcon />
                </Link>
              )}
              {chatBtn && (
                <Link
                  href={chatBtn.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  aria-label="Chat"
                >
                  <ChatIcon />
                </Link>
              )}
              {imageBtn && (
                <Link
                  href={imageBtn.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  aria-label="View gallery"
                >
                  <GalleryIcon />
                </Link>
              )}
              {expandBtn && (
                <button
                    onClick={expandBtn.onClick}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-gray-400 border border-gray-300 transition-colors hover:bg-gray-100 dark:bg-transparent dark:text-gray-500 dark:border-gray-600 dark:hover:bg-gray-800"
                    aria-label={expandBtn.isExpanded ? 'Collapse details' : 'Expand details'}
                    aria-expanded={expandBtn.isExpanded}
                >
                <MoreIcon />
              </button>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Expanded Content - Full Width */}
      {readMore && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandBtn?.isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8">
            <div className="space-y-6 border-t border-gray-200 pt-6 dark:border-gray-700">
              {typeof readMore === 'string' ? (
                <div
                  className="text-sm text-gray-600 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: readMore }}
                />
              ) : (
                <div className="text-sm text-gray-600 dark:text-gray-300">{readMore}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

