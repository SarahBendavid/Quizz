// Index commence a zero :
let i = 0;

function affichage() {
  champQuestion.textContent = tableauQuizz[i].question; //Dans champ question, affiche question i tableau
  options.forEach((option, index) => {
    // Pour chaque option, execute la fonction (parametre fonction) =>
    option.textContent = tableauQuizz[i].reponses[index];
  });
} // Affiche dans option, la reponse indexé du tableau. 3 reponse donc besoin de la position (index)

affichage(); //Appel de la fonction

btnValider.addEventListener("click", function () {
  //Ajout d'une fonction lors de l'evenement click
  let choixUtilisateur = parseInt(reponse.value); // Creation variable qui stock la reponse utilisateur
  if (choixUtilisateur === tableauQuizz[i].bonneReponse)
    correction.textContent = "C'est la bonne reponse !";
  else correction.textContent = "Mauvaise reponse !";
  if (isNaN(choixUtilisateur))
    // Si le choix de l'utilisateur n'est pas un nombre,
    correction.textContent = "Veuillez selectionner une reponse";
  return; // Ne continue pas la suite du code
});

btnSuivant.addEventListener("click", function () {
  correction.textContent = ""; // Vide le champ correction
  reponse.value = ""; // Vide la reponse choisi par l'utilisateur
  i++; // Passe a la question suivante
  if (i >= tableauQuizz.length) {
    champQuestion.textContent = "Vous avez terminé le quizz";
    reponse.textContent = "";
  }
  affichage(); // Appel de la fonction affichage
});
