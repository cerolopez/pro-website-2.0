'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { characters, Character } from '@/lib/characters';
import ChatHeader from '../../components/ChatHeader';
import ChatInterface from '../../components/ChatInterface';
import ImageGenerationInterface from '../../components/ImageGenerationInterface';
import Modal from '@/app/components/Modal';

export default function CharacterChatPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const characterId = params.characterId as string;
  const mode = searchParams.get('mode') || 'chat'; // Default to 'chat' if no mode specified

  const [character, setCharacter] = useState<Character | null>(null);
  const [currentMode, setCurrentMode] = useState<'chat' | 'image'>(mode === 'image' ? 'image' : 'chat');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Update mode when URL search params change
    const urlMode = searchParams.get('mode');
    setCurrentMode(urlMode === 'image' ? 'image' : 'chat');
  }, [searchParams]);

  useEffect(() => {
    // Find character by ID
    const foundCharacter = characters.find((c) => c.id === characterId);
    if (foundCharacter) {
      setCharacter(foundCharacter);
    } else {
      // Redirect to character library if character not found
      router.push('/ai-characters/character-library');
    }
  }, [characterId, router]);

  const handleModeChange = (newMode: 'chat' | 'image') => {
    setCurrentMode(newMode);
    // Update URL without page reload
    router.push(`/ai-characters/chat/${characterId}?mode=${newMode}`, { scroll: false });
  };

  const handleSwitchCharacter = (newCharacterId: string) => {
    setShowDropdown(false);
    // Update URL to the new character while preserving the mode
    router.push(`/ai-characters/chat/${newCharacterId}?mode=${currentMode}`, { scroll: false });
  };

  const handleMoreInfo = () => {
    setShowDropdown(false);
    setIsModalOpen(true);
  };

  if (!character) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white dark:bg-black">
      {/* Header - Always full width */}
      <div className="flex-shrink-0 w-full">
        <ChatHeader
          character={character}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          onMoreInfo={handleMoreInfo}
          onSwitchCharacter={handleSwitchCharacter}
        />
      </div>

      {/* Main Content - 800px max width and centered on large screens */}
      <div className="flex-1 w-full overflow-hidden">
        <div className="h-full w-full lg:max-w-[800px] lg:mx-auto">
          {currentMode === 'chat' ? (
            <ChatInterface character={character} currentMode={currentMode} onModeChange={handleModeChange} />
          ) : (
            <ImageGenerationInterface character={character} currentMode={currentMode} onModeChange={handleModeChange} />
          )}
        </div>
      </div>

      {/* Character Info Modal */}
      {character && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={character.name}
        >
          <p className="text-left text-gray-700 dark:text-gray-300">
            {character.description}
          </p>
          <div className="space-y-6">
            {/* Voice, Tone, and Style Section */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                Voice, Tone, and Style
              </h4>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {character.voiceToneStyle}
              </p>
            </div>

            {/* Example Utterances Section */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
                Example Utterances
              </h4>
              <div className="space-y-4">
                {character.exampleUtterances.map((utterance, index) => (
                  <div
                    key={index}
                    className="text-sm leading-relaxed text-gray-700 dark:text-gray-300"
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
        </Modal>
      )}
    </div>
  );
}

