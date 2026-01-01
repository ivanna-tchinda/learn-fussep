// src/types/exercise.ts
export type ExerciseType =
  | "translate_to_fr"
  | "translate_to_fussep"
  | "choose_correct"

export interface Exercise {
  type: ExerciseType
  question: string
  answer: string | string[]
  instruction: string
  choices?: string[]
  audio?: string | string[]
}


