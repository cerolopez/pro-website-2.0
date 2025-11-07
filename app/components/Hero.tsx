'use client';

import Chatbot from './Chatbot';

export default function Hero() {
  return (
    <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
          Hi, I'm Cecilia
        </h1>
        <p className="text-lg md:text-xl mb-8 text-black dark:text-white max-w-xl mx-auto">
          I'm a hybrid content strategist and AI engineer passionate about crafting human-centered digital experiences.
        </p>
        <Chatbot />
      </div>
    </section>
  );
}

