/**
 * Composant MainSection
 * Affiche les deux boutons principaux de l'application
 * et gère la révision du jour façon "flashcard"
 */
import { useState } from "react";
import vocabData from '../data/vocabulary.json';

// Types pour ton JSON
interface Word {
  fussep: string;
  fr: string;
}

interface Sentence {
  fussep: string;
  fr: string;
}

interface Vocabulary {
  words: Word[];
  sentences: Sentence[];
}

// Fonction utilitaire pour tirer un élément aléatoire
function getRandomItem<T>(array: T[]): T | null {
  if (array.length === 0) return null;
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Props pour le composant
// interface MainSectionProps {
//   onAddWordClick: () => void;
// }

export default function MainSection() {
  const vocabulary: Vocabulary = vocabData;

  // State pour le mot aléatoire
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);

  // Tirer un mot aléatoire et cacher la traduction
  const pickRandomWord = () => {
    const word = getRandomItem(vocabulary.words);
    setCurrentWord(word);
    setShowTranslation(false);
  };

  // Afficher ou cacher la traduction
  const toggleTranslation = () => {
    setShowTranslation(prev => !prev);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Bouton principal: Ajouter un mot */}
      {/* <button
        onClick={onAddWordClick}
        className="w-full py-4 px-6 bg-brown-700 text-white rounded-lg font-medium text-lg shadow-md hover:bg-brown-800 active:bg-brown-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
      >
        Ajouter un mot
      </button> */}

      {/* Bouton secondaire: Commencer la révision */}
      <button
        onClick={pickRandomWord}
        className="w-full py-4 px-6 bg-beige-200 text-brown-800 rounded-lg font-medium text-lg border border-beige-300 hover:bg-beige-300 active:bg-beige-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
      >
        Commencer la révision du jour
      </button>

      {/* Flashcard: mot aléatoire */}
      {currentWord && (
        <div
          onClick={toggleTranslation}
          className="mt-4 p-6 bg-beige-100 rounded-lg shadow cursor-pointer text-center select-none"
        >
          <p className="text-2xl font-semibold">
            {currentWord.fussep}
          </p>
          {showTranslation && (
            <p className="mt-2 text-lg text-brown-800">{currentWord.fr}</p>
          )}
        </div>
      )}
    </div>
  );
}
