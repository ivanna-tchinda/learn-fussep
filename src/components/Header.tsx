/**
 * Composant Header
 * Affiche le nom de l'application et le sous-titre
 */
function Header() {
  return (
    <header className="w-full py-8 px-4 text-center border-b border-beige-200">
      <a href="/"><h1 className="text-3xl md:text-4xl font-bold text-brown-800 mb-2">
        Ndè Fussep
      </h1>
      <p className="text-brown-600 text-sm md:text-base">
        Apprendre le fussep
      </p></a>
    </header>
  )
}

export default Header

