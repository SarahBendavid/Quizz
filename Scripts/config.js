/** Consignes : Creer un quizz de 5 questions dont :
 * - Chaque question affiche 3 réponses.
 * - Un bouton valider
   - Quand l’utilisateur clique sur une réponse, affiche s’il a eu juste ou faux.
   - Un bouton qui permet de passer a la question suivante 
   **/

// Creation d'un tableau contenant toutes les questions et reponses :
const tableauQuizz = [
  {
    question: "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    reponses: ["rouge", "blanc", "marron"], // Index 0,1,2
    bonneReponse: 1, // Index dans le tableau reponses
  },
  {
    question: "Quelle est la capitale de la france ?",
    reponses: ["Paris", "Rome", "Madrid"],
    bonneReponse: 0,
  },
  {
    question: "Quel est le resultat de l'operation suivante : 5+4x6-9 ?",
    reponses: ["45", "52", "20"],
    bonneReponse: 2,
  },
  {
    question: "Quel fruit pousse dans un arbre ?",
    reponses: ["citron", "pasteque", "melon"],
    bonneReponse: 0,
  },
  {
    question: "Qui est allergique a la cryptonite ?",
    reponses: ["batman", "superman", "spiderman"],
    bonneReponse: 1,
  },
];

/** Information importante a se souvenir pour comprendre le code :
 * La balise "select" attribue automatiquement un index a ses options.
 * Dans une liste de reponse deroulante (option), la premiere reponse sera toujours egal a zero, la deuxieme reponse sera egal a 1, et ainsi de suite.
 * On peut donc comparer une reponse de la liste deroulante avec un chiffre.
 */
