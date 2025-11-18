export interface BlogPost {
    id: string;
    title: string;
    date: string;
    description: string;
    body: string;
    thumbnail: string;
    image: string;
    imageAlt: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 'site-launch-with-diego-1-0-and-yue-1-0',
      title: 'Site Launch with Diego 1.0 and Yue 1.0',
      date: '11/18/2025',
      description:
        'Site launch and release of Diego 1.0 and Yue 1.0, two new AI characters that are now available to chat with.',
      body: 'I\'m excited to share the first two characters in my AI portfolio: Diego 1.0 and Yue 1.0. This site is a demo that showcases my prompt engineering and linguistics skills—specifically, how I design AI character behavior through structured JSON schemas and curated linguistic profiles, with the goal of making AI sound more human. Both characters are live and ready to chat, so feel free to test them out and see how they respond.\n\nThis is just the beginning. I\'m actively working on AI-generated character images using Flux LoRA models and building out a pipeline for consistent visual identity generation. More characters are in development, and I\'m refining my prompt engineering approach to character persona and speech patterns with further research and development. If you\'re curious about how I\'m thinking through character architecture or want to talk about AI system design, feel free to reach out.\n\nThe goal here is simple: demonstrate what\'s possible when you combine technical chops with a deep understanding of language and user experience. More to come soon.',
      thumbnail: '/blog-images/blog-thumbnail-11-18-2025_v2.png',
      image: '/blog-images/blog-hero-11-18-2025_v2.png',
      imageAlt: 'AI character portrait'
    }
  ];