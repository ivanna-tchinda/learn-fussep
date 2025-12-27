import { useState } from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import AddWordModal from './components/AddWordModal'
import RevisionSection from './components/RevisionSection'

function App() {
  const [isAddWordModalOpen, setIsAddWordModalOpen] = useState(false)
  const [isRevisionOpen, setIsRevisionOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        {!isRevisionOpen ? (
          <MainSection
            onAddWordClick={() => setIsAddWordModalOpen(true)}
            onStartRevisionClick={() => setIsRevisionOpen(true)}
          />
        ) : (
          <RevisionSection onClose={() => setIsRevisionOpen(false)} />
        )}
      </main>
      {isAddWordModalOpen && (
        <AddWordModal onClose={() => setIsAddWordModalOpen(false)} />
      )}
    </div>
  )
}

export default App

