import { blogPosts } from '@/lib/blog-posts';
import UpdateCard from '../components/UpdateCard';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pb-24 pt-16 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Blog
          </h1>
          {/* <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300">
            Stories, insights, and behind-the-scenes content about AI character creation and design.
          </p> */}
        </header>

        {/* Blog Posts Section */}
        <section>
          <div className="mx-auto max-w-[650px]">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <UpdateCard
                  key={post.id}
                  image={{
                    src: post.thumbnail,
                    alt: post.imageAlt,
                  }}
                  date={post.date}
                  title={post.title}
                  titleHref={`/ai-characters/blog/${post.id}`}
                  description={post.description}
                  readBlogBtn={{
                    href: '/ai-characters/blog/site-launch-with-diego-1-0-and-yue-1-0',
                  }}
                  chatBtn={{
                    href: '/ai-characters/chat/diego-1?mode=chat',
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
