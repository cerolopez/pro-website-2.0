'use client';

export default function Navigation() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 64; // Height of fixed navigation bar (h-16 = 4rem = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden sm:flex flex-1"></div>
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="#about"
              onClick={(e) => handleAnchorClick(e, '#about')}
              className="text-gray-700 dark:text-gray-300 font-sans hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={(e) => handleAnchorClick(e, '#experience')}
              className="text-gray-700 dark:text-gray-300 font-sans hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={(e) => handleAnchorClick(e, '#projects')}
              className="text-gray-700 dark:text-gray-300 font-sans hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Portfolio
            </a>
          </div>
          <div className="hidden sm:flex flex-1"></div>
        </div>
      </div>
    </nav>
  );
}

