import { Snake } from "./snake.js";
import { drawScore } from "./score.js";
import { Food } from "./food.js";
import { setControls } from "./controls.js";
import { checkCollision } from "./collision.js";

// Tableau des scores
let scores = [];

function startGame() {
  // Masquer le menu et afficher le canvas
  document.getElementById("menu").style.display = "none";
  document.getElementById("gameCanvas").style.display = "block";
  document.getElementById("replayButton").style.display = "none"; // Cacher le bouton de replay
  document.getElementById("viewScoreButton").style.display = "none"; // Cacher le bouton de voir le score
  document.getElementById("mainMenuButton").style.display = "none"; // Cacher le bouton du menu principal

  // Récupérer la difficulté choisie
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const gridSize = 20; // Taille de chaque case
  const speed = parseInt(document.querySelector('input[name="difficulty"]:checked').value);//fait référence(et selectionet) à un élément input radio

  const snake = new Snake(gridSize); // Créer un serpent
  const food = new Food(gridSize, canvas.width, canvas.height); // Créer de la nourriture
  let score = 0; // Score initial
  let timePassed = 0; // Timer initialisé à 0
  setControls(snake); // Lier les contrôles du serpent

  // Afficher le timer sur la page
  const timerElement = document.getElementById("timer");
  timerElement.innerText = `Temps: 0`; // Afficher le temps initial

  // Timer de jeu qui se met à jour chaque seconde
  const gameTimer = setInterval(() => {
    timePassed++; // Incrémenter le temps passé
    timerElement.innerText = `Temps: ${timePassed}`; // Mettre à jour l'affichage du temps
  }, 1000); // Chaque seconde

  // Boucle du jeu
  const gameInterval = setInterval(() => {
    snake.move(); // Déplacer le serpent

    // Vérifier les collisions
    if (checkCollision(snake, canvas.width, canvas.height)) {
      clearInterval(gameInterval); // Terminer le jeu en cas de collision
      clearInterval(gameTimer); // Arrêter le timer
      showEndGameButtons(score, timePassed); // Passer aussi le timer à la fonction de fin de jeu
      return;
    }

    // Vérifier si le serpent mange la nourriture
    if (snake.head.x === food.position.x && snake.head.y === food.position.y) {
      snake.grow(); // Grandir le serpent
      food.position = food.generatePosition(); // Générer une nouvelle nourriture
      score++; // Incrémenter le score
    }

    // Dessiner tout
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer l'écran
    snake.draw(ctx); // Dessiner le serpent
    food.draw(ctx); // Dessiner la nourriture
    drawScore(ctx, score); // Afficher le score
  }, speed); // Intervalle de jeu
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showEndGameButtons(score, timePassed) {
  // Afficher les boutons de fin de jeu
  document.getElementById("replayButton").style.display = "block";
  document.getElementById("viewScoreButton").style.display = "block";
  document.getElementById("mainMenuButton").style.display = "block";

  // Ajouter le score et le temps dans le tableau des scores
  const playerName = prompt("Entrez votre nom pour enregistrer votre score:");
  if (playerName) {
    scores.push({ name: playerName, score: score, time: timePassed});
  }

  // Mettre à jour le tableau des scores
  updateScoreTable();

  alert(`Game Over! Score: ${score}, Temps: ${timePassed}`);
}

function updateScoreTable() {
  const scoreBody = document.getElementById("scoreBody"); //est une méthode de l'objet document qui permet de récupérer un élément HTML en utilisant son attribut id.
  scoreBody.innerHTML = ""; // Vider le tableau avant de le mettre à jour
  scores.sort((a, b) => b.score - a.score); // Trier les scores par ordre décroissant

  // Ajouter chaque score dans la table
  scores.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.name}</td><td>${entry.score}</td><td>${entry.time}</td><td>${entry.speed}</td>`;
    scoreBody.appendChild(row);
  });

  // Afficher la table des scores uniquement si il y a des scores
  if (scores.length > 0) {
    document.getElementById("scoreTable").style.display = "block"; // Afficher la table des scores
  }
}

/*// Fonction de fin de jeu
function endGame(score) {
  alert(`Temps écoulé! Score final: ${score}`);
  showEndGameButtons(score, 0);
}*/

// Écouteurs d'événements
document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("replayButton").addEventListener("click", startGame);
document.getElementById("viewScoreButton").addEventListener("click", () => {
  alert("Voir les meilleurs scores!");
});
document.getElementById("mainMenuButton").addEventListener("click", () => {
  document.getElementById("menu").style.display = "block"; // Afficher le menu principal
  document.getElementById("gameCanvas").style.display = "none"; // Masquer le canvas
});