// src/components/Exercise.tsx
import { useState } from 'react'

interface ExerciseTypeTranslate {
  type: 'translate_to_fr' | 'translate_to_fussep'
  question: string
  answer: string
  instruction?: string
}

interface ExerciseTypeQCM {
  type: 'choose_correct'
  question: string
  choices: string[]
  answer: string
  instruction?: string
}

type ExerciseData = ExerciseTypeTranslate | ExerciseTypeQCM

interface ExerciseProps {
  exercise: ExerciseData
  onNext: () => void
}

export default function Exercise({ exercise, onNext }: ExerciseProps) {
  const [userAnswer, setUserAnswer] = useState('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleSubmit = () => {
    const correct = userAnswer.trim().toLowerCase() === exercise.answer.toLowerCase()
    setIsCorrect(correct)
  }

  const handleNext = () => {
    setUserAnswer('')
    setIsCorrect(null)
    onNext()
  }

  // QCM
  if (exercise.type === 'choose_correct') {
    return (
      <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-beige-100 rounded-lg shadow-md text-center">
        {exercise.instruction && (
          <p className="text-sm text-brown-600 mb-2">{exercise.instruction}</p>
        )}
        <p className="text-2xl font-semibold mb-4">{exercise.question}</p>
        <div className="grid grid-cols-1 gap-3">
          {exercise.choices.map((choice) => {
            const correct = choice === exercise.answer
            const selected = choice === userAnswer
            const bgColor = isCorrect !== null
              ? correct
                ? 'bg-green-500 text-white'
                : selected
                ? 'bg-red-500 text-white'
                : 'bg-beige-200 text-brown-800'
              : 'bg-beige-200 text-brown-800'

            return (
              <button
                key={choice}
                onClick={() => {
                  setUserAnswer(choice)
                  setIsCorrect(choice === exercise.answer)
                }}
                className={`py-3 px-4 rounded-lg font-medium ${bgColor} hover:bg-beige-300 transition-colors`}
                disabled={isCorrect !== null}
              >
                {choice}
              </button>
            )
          })}
        </div>
        {isCorrect !== null && (
          <button
            onClick={handleNext}
            className="mt-6 px-6 py-3 bg-beige-200 text-brown-800 rounded-lg font-medium hover:bg-beige-300 transition-colors"
          >
            Suivant
          </button>
        )}
      </div>
    )
  }

  // Traduction avec input
  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-beige-100 rounded-lg shadow-md text-center">
      {exercise.instruction && (
        <p className="text-sm text-brown-600 mb-2">{exercise.instruction}</p>
      )}
      <p className="text-2xl font-semibold mb-4">{exercise.question}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg text-center text-brown-800"
        placeholder="Tape ta réponse ici"
        onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-brown-700 text-white rounded-lg hover:bg-brown-800 transition-colors"
        disabled={isCorrect !== null}
      >
        Valider
      </button>

      {isCorrect !== null && (
        <>
          <p className={`mt-4 font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '✅ Correct !' : `❌ Faux, la bonne réponse : ${exercise.answer}`}
          </p>
          <button
            onClick={handleNext}
            className="mt-4 px-6 py-3 bg-beige-200 text-brown-800 rounded-lg font-medium hover:bg-beige-300 transition-colors"
          >
            Suivant
          </button>
        </>
      )}
    </div>
  )
}
