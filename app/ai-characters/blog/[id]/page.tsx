import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-posts';

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);
  
    if (!post) {
      notFound();
    }  

  return (
    <div className="min-h-screen bg-white pb-24 pt-16 dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <Link
          href="/ai-characters/blog"
          className="mb-8 inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
            <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              {post.title}
            </h1>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.body.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
                {paragraph}
                </p>
            ))}
            </div>
        </article>
      </div>
    </div>
  );
}