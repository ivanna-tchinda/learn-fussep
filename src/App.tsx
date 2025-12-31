// src/App.tsx
import { useState } from 'react'
import Header from './components/Header'
import LessonSelector from './components/LessonSelector'
import Exercise from './components/Exercise'
import type { Lesson } from './components/LessonSelector' // Assure-toi d'exporter le type Lesson dans LessonSelector.tsx

function App() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)

  const handleNextExercise = () => {
    if (!selectedLesson) return
    if (currentExerciseIndex < selectedLesson.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1)
    } else {
      // Fin de la leçon
      alert('Tu as terminé la leçon !')
      setSelectedLesson(null)
      setCurrentExerciseIndex(0)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        {!selectedLesson ? (
          <LessonSelector onSelectLesson={(lesson) => {
            setSelectedLesson(lesson)
            setCurrentExerciseIndex(0)
          }} />
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
