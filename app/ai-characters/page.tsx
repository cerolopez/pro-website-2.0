import Image from 'next/image';
import Link from 'next/link';
import UpdateCard from './components/UpdateCard';
import { blogPosts } from '@/lib/blog-posts';

// const galleryImages = [
//   {
//     src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
//     alt: 'Portrait of a woman with long dark hair, wearing a white top',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
//     alt: 'Portrait of a woman with her hair tied up, holding a drink, smiling',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80',
//     alt: 'Portrait of a smiling man with dark skin and a beard',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
//     alt: 'Portrait of a woman with long brown hair, smiling softly',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
//     alt: 'Portrait of a woman with dark hair, wearing a white t-shirt',
//   },
// ];

export default function AICharactersPage() {
  return (
    <div className="min-h-screen bg-white pb-24 pt-16 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            AI Character Portfolio
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 dark:text-gray-300">
            This is a demo site for AI characters designed and developed by Cecilia Lopez.
          </p>
          <Link
            href="/ai-characters/character-library"
            className="inline-block rounded-lg bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Browse AI Characters
          </Link>
        </header>

        {/* Latest Update Section */}
        <section className="mb-16">
          <div className="mx-auto max-w-[650px]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Latest Update
              </h2>
              <Link
                href="/ai-characters/blog"
                className="text-sm text-gray-600 underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                View all
              </Link>
            </div>
            <UpdateCard
              image={{
                src: blogPosts[0].thumbnail,
                alt: blogPosts[0].imageAlt,
              }}
              date={blogPosts[0].date}
              title={blogPosts[0].title}
              titleHref="/ai-characters/blog/site-launch-with-diego-1-0-and-yue-1-0"
              description={blogPosts[0].description}
              readBlogBtn={{
                href: '/ai-characters/blog/site-launch-with-diego-1-0-and-yue-1-0',
              }}
              chatBtn={{
                href: '/ai-characters/chat/diego-1?mode=chat',
              }}
              // imageBtn={{
              //   href: '/ai-characters/chat/diego-1?mode=image',
              // }}
            />
          </div>
        </section>

        {/* AI Image Gallery Section */}
        {/* <section id="library">
          <div className="mx-auto max-w-[650px]">
            <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
              AI Image Gallery
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
