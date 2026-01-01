// src/App.tsx
import { useState } from "react"
import Header from "./components/Header"
import LessonSelector from "./components/LessonSelector"
import Exercise from "./components/Exercise"
import lessonsData from "./data/lessons.json"
import wordsData from "./data/words.json"
import type { Lesson } from "./types/lesson"
import type { Word } from "./types/word"
import type { Exercise as ExerciseType } from "./types/exercise"
import { generateLessonExercises } from "./engine/LessonEngine"


function App() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [learnedWords, setLearnedWords] = useState<Word[]>([]) // mots déjà vus
const [score, setScore] = useState(0);

  // Sélection d'une leçon
  const handleSelectLesson = (lessonId: number) => {
    const lessonJson = lessonsData.lessons.find(l => l.id === lessonId)
    if (!lessonJson) return

    // 1️⃣ Récupérer les mots complets avec fussep toujours tableau
    const newWords: Word[] = lessonJson.newWordIds.map(id => {
      const word = wordsData.words.find(w => w.id === id)
      if (!word) throw new Error(`Word with id ${id} not found`)
      return {
        ...word,
        fussep: Array.isArray(word.fussep) ? word.fussep : [word.fussep]
      }
    })

    // 2️⃣ Créer la leçon complète
    const lesson: Lesson = {
      ...lessonJson,
      newWords,
      exercises: [] // on remplira juste après
    }

    // 3️⃣ Générer les exercices dynamiques
    const exercises: ExerciseType[] = generateLessonExercises(
      lesson,
      wordsData.words,
      learnedWords // mots déjà vus pour répétition espacée
    )

    lesson.exercises = exercises

    // 4️⃣ Mettre à jour l'état
    setSelectedLesson(lesson)
    setCurrentExerciseIndex(0)

    // 5️⃣ Ajouter ces mots aux mots déjà vus
    setLearnedWords(prev => [...prev, ...newWords])
  }

  // Passer à l'exercice suivant
  const handleNextExercise = (wasCorrect: boolean) => {
  if (wasCorrect) {
    setScore(prev => prev + 1);
  }

  if (!selectedLesson) return;

  if (currentExerciseIndex < selectedLesson.exercises.length - 1) {
    setCurrentExerciseIndex(currentExerciseIndex + 1);
  } else {
    alert(`Tu as terminé la leçon ! Score final : ${score + (wasCorrect ? 1 : 0)} / ${selectedLesson.exercises.length}`);
    setSelectedLesson(null);
    setCurrentExerciseIndex(0);
    setScore(0);
  }
};


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 space-y-4">

      {/* Score en direct */}
      {selectedLesson && (
        <div className="text-center text-lg font-medium text-brown-800">
          Score : {score} / {selectedLesson.exercises.length}
        </div>
      )}

      {!selectedLesson ? (
        <LessonSelector onSelectLesson={handleSelectLesson} />
      ) : (
        <Exercise
          exercise={selectedLesson.exercises[currentExerciseIndex]}
          onNext={handleNextExercise}
        />
      )}
    </main>

    </div>
  )
}

export default App
