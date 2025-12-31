import { useState } from 'react'

/**
 * Composant AddWordModal
 * Modal pour ajouter un nouveau mot avec ses informations
 */

interface AddWordModalProps {
  onClose: () => void
}

function AddWordModal({ onClose }: AddWordModalProps) {
  const [motFussep, setMotFussep] = useState('')
  const [traduction, setTraduction] = useState('')
  const [exemple, setExemple] = useState('')

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // Pas de logique backend - juste fermer le modal
    onClose()
  }

  return (
    <>
      {/* Overlay sombre */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
          {/* En-tête du modal */}
          {/* <div className="flex items-center justify-between p-6 border-b border-beige-200">
            <h2 className="text-xl font-semibold text-brown-800">
              Ajouter un mot
            </h2>
            <button
              onClick={onClose}
              className="text-brown-600 hover:text-brown-800 transition-colors text-2xl leading-none"
              aria-label="Fermer"
            >
              ×
            </button>
          </div> */}

          {/* Formulaire */}
          <form onSubmit={handleSave} className="p-6 space-y-4">
            {/* Input: Mot en fussep */}
            <div>
              <label
                htmlFor="mot-fussep"
                className="block text-sm font-medium text-brown-700 mb-2"
              >
                Mot en fussep
              </label>
              <input
                id="mot-fussep"
                type="text"
                value={motFussep}
                onChange={(e) => setMotFussep(e.target.value)}
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent text-brown-900 bg-beige-50"
                placeholder="Entrez le mot en fussep"
              />
            </div>

            {/* Input: Traduction française */}
            <div>
              <label
                htmlFor="traduction"
                className="block text-sm font-medium text-brown-700 mb-2"
              >
                Traduction française
              </label>
              <input
                id="traduction"
                type="text"
                value={traduction}
                onChange={(e) => setTraduction(e.target.value)}
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent text-brown-900 bg-beige-50"
                placeholder="Entrez la traduction"
              />
            </div>

            {/* Input: Exemple de phrase */}
            <div>
              <label
                htmlFor="exemple"
                className="block text-sm font-medium text-brown-700 mb-2"
              >
                Exemple de phrase
              </label>
              <textarea
                id="exemple"
                value={exemple}
                onChange={(e) => setExemple(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent text-brown-900 bg-beige-50 resize-none"
                placeholder="Entrez un exemple de phrase"
              />
            </div>

            {/* Boutons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 px-4 bg-beige-200 text-brown-800 rounded-lg font-medium hover:bg-beige-300 active:bg-beige-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex-1 py-2 px-4 bg-brown-700 text-white rounded-lg font-medium hover:bg-brown-800 active:bg-brown-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddWordModal

