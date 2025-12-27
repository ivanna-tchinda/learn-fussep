/**
 * Composant RevisionSection
 * Section de révision avec placeholder pour le mot du jour
 */


interface RevisionSectionProps {
  onClose: () => void
}
function RevisionSection({ onClose }: RevisionSectionProps) {

  return (
    <div className="w-full max-w-md">
      {/* Bouton retour */}
      <button
        onClick={onClose}
        className="mb-6 text-brown-600 hover:text-brown-800 transition-colors flex items-center gap-2"
      >
        <span className="text-xl">←</span>
        <span className="font-medium">Retour</span>
      </button>

      {/* Carte de révision */}
      <div className="bg-white rounded-lg shadow-lg p-8 border border-beige-200">
        {/* Titre */}
        <h2 className="text-2xl font-semibold text-brown-800 mb-6 text-center">
          Révision du jour
        </h2>

        {/* Placeholder pour le mot */}
        <div className="space-y-6">
          {/* Mot en fussep */}
          <div className="text-center">
            <p className="text-3xl font-bold text-brown-900 mb-2">
              Mot du jour
            </p>
            <p className="text-brown-600 text-sm italic">
              [Placeholder pour la prononciation]
            </p>
          </div>

          {/* Traduction */}
          <div className="text-center py-4 border-t border-b border-beige-200">
            <p className="text-brown-700 text-lg">
              [Placeholder pour la traduction]
            </p>
          </div>

          {/* Exemple */}
          <div className="text-center">
            <p className="text-brown-600 italic">
              [Placeholder pour l'exemple de phrase]
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-3 pt-4">
            <button
              className="flex-1 py-3 px-4 bg-beige-200 text-brown-800 rounded-lg font-medium hover:bg-beige-300 active:bg-beige-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
            >
              À revoir
            </button>
            <button
              className="flex-1 py-3 px-4 bg-brown-700 text-white rounded-lg font-medium hover:bg-brown-800 active:bg-brown-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
            >
              Je connais
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevisionSection

