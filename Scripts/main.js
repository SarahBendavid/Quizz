//Recuperation des elements html :

let champQuestion = document.getElementById("question");
let reponse = document.querySelector("select");
let options = document.querySelectorAll(
  'option[value="0"],option[value="1"],option[value="2"]'
);
let btnValider = document.getElementById("btnValider");
let correction = document.getElementById("correction");
let btnSuivant = document.getElementById("btnSuivante");
