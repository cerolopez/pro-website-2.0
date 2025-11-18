'use client';

import { useState, useEffect } from 'react';
import { characters } from '@/lib/characters';
import UpdateCard from '../components/UpdateCard';


export default function CharacterLibraryPage() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Handle scrolling to character when hash is present
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const characterId = window.location.hash.slice(1);
        const element = document.getElementById(characterId);
        if (element) {
          const headerHeight = 64; // Height of header/navigation
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    // Scroll after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(handleHash, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const toggleCard = (characterId: string) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(characterId)) {
        newSet.delete(characterId);
      } else {
        newSet.add(characterId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white pb-24 pt-16 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            AI Character Library
          </h1>
          {/* <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300">
            Stories, insights, and behind-the-scenes content about AI character creation and design.
          </p> */}
        </header>

        {/* Main Content */}
        <section>
          <div className="mx-auto max-w-[650px]">
            {/* Character Cards */}
            <div className="space-y-6">
            {characters.map((character) => (
              <UpdateCard
                key={character.id}
                id={character.id}
                image={{
                  src: character.image,
                  alt: character.name,
                }}
                title={character.name}
                description={character.description}
                chatBtn={{
                  href: `/ai-characters/chat/${character.id}?mode=chat`,
                }}
                // imageBtn={{
                //   href: `/ai-characters/chat/${character.id}?mode=image`,
                // }}
                expandBtn={{
                  onClick: () => toggleCard(character.id),
                  isExpanded: expandedCards.has(character.id),
                }}
                readMore={
                  <div className="space-y-6">
                    {/* Full Description Section */}
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                        More Features
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {character.fullDescription}
                      </p>
                    </div>
                    {/* Voice, Tone, and Style Section */}
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                        Voice, Tone, and Style
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {character.voiceToneStyle}
                      </p>
                    </div>

                    {/* Example Utterances Section */}
                    <div>
                      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Example Utterances
                      </h4>
                      <div className="space-y-4">
                        {character.exampleUtterances.map((utterance, index) => (
                          <div
                            key={index}
                            className="text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                          >
                            <p className="mb-1">
                              <span className="font-medium">Q:</span> {utterance.question}
                            </p>
                            <p>
                              <span className="font-medium">{character.name}:</span> {utterance.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
            ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
