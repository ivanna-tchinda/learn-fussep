// src/components/LessonSelector.tsx
import lessonsData from "../data/lessons.json"
import type { LessonJSON } from "../types/lesson-json"

interface LessonSelectorProps {
  onSelectLesson: (lessonId: number) => void
}

export default function LessonSelector({ onSelectLesson }: LessonSelectorProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold text-center text-brown-800 mb-4">
        Choisis une leçon
      </h2>

      {lessonsData.lessons.map((lesson: LessonJSON) => (
        <button
          key={lesson.id}
          onClick={() => onSelectLesson(lesson.id)}
          className="w-full py-4 px-6 bg-beige-200 text-brown-800 rounded-lg font-medium text-lg border border-beige-300 hover:bg-beige-300 active:bg-beige-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
        >
          Leçon {lesson.id} : {lesson.title}
        </button>
      ))}
    </div>
  )
}
