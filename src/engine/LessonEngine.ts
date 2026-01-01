// src/engine/LessonEngine.ts
import { Lesson } from "../types/lesson"
import { Word } from "../types/word"
import { Exercise, ExerciseType } from "../types/exercise"

const EXERCISE_TYPES: ExerciseType[] = [
  "translate_to_fr",
  "translate_to_fussep",
  "choose_correct"
]

function random<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}

function generateFrChoices(words: Word[], correct: Word): string[] {
  const others = words.filter(w => w.id !== correct.id).map(w => w.fr)
  return shuffle([correct.fr, ...others.slice(0, 2)])
}

function generateFussepChoices(words: Word[], correct: Word): string[] {
  const others = words.filter(w => w.id !== correct.id).flatMap(w => w.fussep)
  return shuffle([random(correct.fussep), ...others.slice(0, 2)])
}

function buildExercise(type: ExerciseType, word: Word, allWords: Word[]): Exercise {
const baseExercise = {
    audio: word.audio, // <-- récupère l'audio du mot
  }

  switch (type) {
    case "translate_to_fr":
      return {
        ...baseExercise,
        type,
        question: random(word.fussep),
        answer: word.fr,
        instruction: "Traduis en français"
      }

    case "translate_to_fussep":
      return {
        ...baseExercise,
        type,
        question: word.fr,
        answer: word.fussep,
        instruction: "Traduis en fussep"
      }

    case "choose_correct":
      const isFrQuestion = Math.random() < 0.5
      if (isFrQuestion) {
        return {
          ...baseExercise,
          type,
          question: random(word.fussep),
          choices: generateFrChoices(allWords, word),
          answer: word.fr,
          instruction: "Choisis la bonne traduction"
        }
      } else {
        return {
          ...baseExercise,
          type,
          question: word.fr,
          choices: generateFussepChoices(allWords, word),
          answer: random(word.fussep),
          instruction: "Choisis la bonne traduction"
        }
      }
  }
}

// Génère tous les exercices pour une leçon
export function generateLessonExercises(
  lesson: Lesson,
  allWords: Word[],
  alreadyLearned: Word[] = []
): Exercise[] {
  const lessonWords = [...lesson.newWords, ...alreadyLearned]
  const exercises: Exercise[] = []

  while (exercises.length < lesson.exerciseCount) {
    const word = random(lessonWords)
    const type = random(EXERCISE_TYPES)
    exercises.push(buildExercise(type, word, allWords))
  }

  return shuffle(exercises)
}
