// src/types/lesson.ts
import type { Exercise } from "./exercise"
import type { Word } from "./word"

export interface Lesson {
  id: number
  title: string
  newWords: Word[]
  exercises: Exercise[]
  exerciseCount: number   // ajouté pour correspondre au JSON
}
