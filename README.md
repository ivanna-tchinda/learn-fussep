Fussep Learning App

Application web pour apprendre la langue Fussep.
Inspirée de Duolingo, elle propose des leçons progressives avec des exercices interactifs pour apprendre des mots et phrases en Fussep.

📖 Objectif

Apprendre le Fussep de manière progressive, leçon par leçon.

Répéter les mots déjà vus pour renforcer la mémorisation.

Exercices interactifs : traduction, QCM, saisie libre.

Feedback immédiat et système de notation.

⚡ Fonctionnalités

Sélection de leçons : choisir la leçon à étudier.

Exercices dynamiques : mélanger mots nouveaux et déjà vus.

Types d’exercices :

Traduction vers le français

Traduction vers le Fussep

QCM (choisir la bonne traduction parmi 3 options)

Feedback instantané : réponse correcte ou incorrecte.

Système de notation : score affiché au fur et à mesure.

Fin de leçon : message de fin et score final.

📁 Structure du projet
src/
 ├─ components/
 │   ├─ Header.tsx
 │   ├─ LessonSelector.tsx
 │   └─ ExerciseCard.tsx
 ├─ data/
 │   ├─ words.json
 │   └─ lessons.json
 ├─ types/
 │   ├─ word.ts
 │   ├─ lesson.ts
 │   └─ exercise.ts
 ├─ engines/
 │   └─ LessonEngine.ts
 └─ App.tsx


data/words.json → liste des mots Fussep avec leurs traductions.

data/lessons.json → structure des leçons et mots à apprendre.

types/ → types TypeScript pour mots, leçons et exercices.

engines/LessonEngine.ts → logique de génération automatique des exercices.

components/ → composants React pour l’UI.

App.tsx → gestion de la leçon, de la progression et du score.

⚙️ Installation

Cloner le dépôt :

git clone https://github.com/ivanna-tchinda/learn-fussep.git
cd learn-fussep


Installer les dépendances :

npm install


Lancer l’application :

npm start


Ouvrir ensuite http://localhost:3000
 dans le navigateur.

🛠️ Utilisation

Sélectionner une leçon dans la liste.

Répondre aux exercices :

Saisie libre pour traduire

QCM pour choisir la bonne traduction

Après validation, le score est mis à jour.

Cliquer sur Suivant pour passer à l’exercice suivant.

À la fin de la leçon, le score final est affiché.

📝 Format des fichiers JSON
words.json
{
  "words": [
    {
      "id": 1,
      "fr": "bonjour",
      "fussep": ["o tia"]
    },
    {
      "id": 2,
      "fr": "Comment ça va?",
      "fussep": ["Amgueke?", "teuchong?"]
    }
  ]
}


id : identifiant unique

fr : mot ou phrase en français

fussep : tableau de traductions possibles en Fussep

lessons.json
{
  "lessons": [
    {
      "id": 1,
      "title": "Salutations",
      "newWordIds": [1, 2],
      "exerciseCount": 8
    }
  ]
}


id : identifiant unique de la leçon

title : nom de la leçon

newWordIds : tableau des id des mots à apprendre

exerciseCount : nombre d’exercices générés dynamiquement

💡 Contributions

Les contributions sont les bienvenues :

Ajouter de nouvelles leçons et mots.

Ajouter de nouveaux types d’exercices.

Améliorer l’UX et le design.

Merci de faire un fork, créer une branche, puis proposer une Pull Request.

📄 License

MIT License – libre d’utilisation et modification.