import { useState } from "react";
import { Exercise } from "../types/exercise";

interface ExerciseProps {
  exercise: Exercise;
  onNext: (wasCorrect: boolean) => void; // <-- avant c'était () => void
}


function normalize(text: string) {
  return text.toLowerCase().trim().replace(/[?.!]/g, "");
}

export default function ExerciseCard({ exercise, onNext }: ExerciseProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const checkAnswer = (answer: string) => {
    const expected = exercise.answer;
    if (Array.isArray(expected)) {
      return expected.some(e => normalize(e) === normalize(answer));
    }
    return normalize(expected) === normalize(answer);
  };

  const handleSubmit = () => {
    const correct = checkAnswer(userAnswer);
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
    const correct = checkAnswer(choice);
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  const handleNext = () => {
  setUserAnswer("");
  setIsCorrect(null);
  setHasAnswered(false);
  setSelectedChoice(null);
  onNext(isCorrect === true); // <-- passe true si correct, false sinon
};

const playAudio = (choiceIndex?: number) => {
  console.log("Attempting to play audio...");
  if (!exercise.audio) return console.log("No audio available for this exercise.");

  let audioSrc: string | undefined;

  if (choiceIndex !== undefined && Array.isArray(exercise.audio)) {
    audioSrc = exercise.audio[choiceIndex];
  } else if (Array.isArray(exercise.audio)) {
    audioSrc = exercise.audio[0];
  } else {
    audioSrc = exercise.audio;
  }

  if (!audioSrc) return;

  const audio = new Audio(audioSrc);
  audio.play();
  console.log("Playing audio:", audioSrc);
};




  return (
    <div className="max-w-md mx-auto p-6 bg-beige-100 rounded-xl shadow space-y-4">

      {/* Consigne */}
      <p className="text-sm text-brown-700 font-medium">
        {exercise.instruction}
      </p>

      {/* Question */}
      <p
        className="text-2xl font-semibold text-center cursor-pointer"
        onClick={() => playAudio()}
      >
        {exercise.question || "QUESTION MANQUANTE"}
      </p>







      {/* QCM */}
{exercise.choices && (
  <div className="space-y-2">
    {exercise.choices.map((choice) => {
      let bg = "bg-white text-brown-800";

      if (hasAnswered) {
        const correct = Array.isArray(exercise.answer)
          ? exercise.answer.some(a => normalize(a) === normalize(choice))
          : normalize(choice) === normalize(exercise.answer);

        if (correct) bg = "bg-green-600 text-white";
        else if (choice === selectedChoice) bg = "bg-red-600 text-white";
      }

      return (
        <button
          key={choice}
          onClick={() => handleChoiceClick(choice)}
          disabled={hasAnswered}
          className={`w-full p-3 rounded-lg border hover:bg-beige-200 ${bg}`}
        >
          {choice}
        </button>
      );
    })}
  </div>
)}

{/* Input libre */}
{!exercise.choices && (
  <>
    <input
      type="text"
      value={userAnswer}
      onChange={e => setUserAnswer(e.target.value)}
      className="w-full p-3 rounded-lg border"
      placeholder="Ta réponse"
      disabled={hasAnswered} // bloquer l’input après validation
    />
    {!hasAnswered && (
      <button
        onClick={handleSubmit} // plus besoin de playAudio ici
        className="w-full py-3 bg-brown-700 text-white rounded-lg"
      >
        Valider
      </button>
    )}
  </>
)}


      {/* Feedback */}
      {hasAnswered && isCorrect === false && (
        <p className="text-red-600 text-center font-medium">
          Mauvaise réponse :{" "}
          {Array.isArray(exercise.answer) ? exercise.answer.join(" / ") : exercise.answer}
        </p>
      )}

      {hasAnswered && isCorrect === true && (
        <p className="text-green-600 font-medium text-center">
          Bonne réponse
        </p>
      )}

      {/* Bouton Suivant toujours affiché après validation */}
      {hasAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-green-600 text-white rounded-lg"
        >
          Suivant
        </button>
      )}
    </div>
  );
}
