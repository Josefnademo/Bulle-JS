import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvasContainer = document.getElementById("gameCanvas");
let canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
canvasContainer.appendChild(canvas);
const ctx = canvas.getContext("2d");

const box = 20;
let gameSpeed = 200; // Vitesse par défaut (facile)
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval;
let musicEnabled = true;

// Fonction pour initialiser le serpent
function initSnake() {
  return [{ x: 10 * box, y: 10 * box }];
}

// Fonction pour déplacer le serpent
function moveSnake(snake, direction, box) {
  let newHead;
  switch (direction) {
    case "LEFT":
      newHead = { x: snake[0].x - box, y: snake[0].y };
      break;
    case "UP":
      newHead = { x: snake[0].x, y: snake[0].y - box };
      break;
    case "RIGHT":
      newHead = { x: snake[0].x + box, y: snake[0].y };
      break;
    case "DOWN":
      newHead = { x: snake[0].x, y: snake[0].y + box };
      break;
  }
  snake.unshift(newHead);
  snake.pop();
  return newHead;
}

// Fonction pour dessiner le serpent
function drawSnake(ctx, snake, box) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
  ctx.fillStyle = "green";
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? "green" : "lightgreen";
    ctx.fillRect(segment.x, segment.y, box, box);
  });
}

// Fonction pour générer la nourriture
function generateFood(box, canvas) {
  return {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box,
  };
}

// Fonction pour dessiner la nourriture
function drawFood(ctx, food, box) {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);
}

// Fonction pour dessiner le score
function drawScore(ctx, score) {
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

// Fonction pour gérer le changement de direction du serpent
function handleDirectionChange(event, direction) {
  switch (event.key) {
    case "ArrowLeft":
      if (direction !== "RIGHT") direction = "LEFT";
      break;
    case "ArrowUp":
      if (direction !== "DOWN") direction = "UP";
      break;
    case "ArrowRight":
      if (direction !== "LEFT") direction = "RIGHT";
      break;
    case "ArrowDown":
      if (direction !== "UP") direction = "DOWN";
      break;
  }
  return direction;
}

// Fonction pour vérifier les collisions avec les murs
function checkWallCollision(snake, canvas) {
  const head = snake[0];
  return (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height
  );
}

// Fonction pour vérifier les collisions avec le serpent lui-même
function checkCollision(snake) {
  const head = snake[0];
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

// Fonction pour démarrer le jeu
function startGame() {
  document.getElementById("menu").style.display = "none";

  // Remettre le canvas par défaut
  canvasContainer.innerHTML = "";
  canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  canvasContainer.appendChild(canvas);
  ctx = canvas.getContext("2d");

  snake = initSnake();
  food = generateFood(box, canvas);

  gameSpeed = parseInt(
    document.querySelector("input[name='difficulty']:checked").value
  );

  gameInterval = setInterval(draw, gameSpeed);
}

// Fonction pour dessiner le jeu à chaque rafraîchissement
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSnake(ctx, snake, box);
  drawFood(ctx, food, box);
  drawScore(ctx, score);

  snake = moveSnake(snake, direction, box);

  if (checkWallCollision(snake, canvas) || checkCollision(snake)) {
    endGame();
  }

  if (checkCollision(snake, food)) {
    score++;
    food = generateFood(box, canvas);
  }
}

// Fonction pour arrêter le jeu
function endGame() {
  clearInterval(gameInterval);
  alert("Game Over! Score: " + score);

  // Réafficher le menu après la fin du jeu
  document.getElementById("menu").style.display = "flex";
}

// Fonction pour activer ou désactiver la musique
function toggleMusic() {
  musicEnabled = !musicEnabled;
  // Ajouter le contrôle de la musique ici (comme l'utilisation d'un élément audio)
}

// Fonction pour ajuster la vitesse du jeu en fonction de la difficulté
function adjustGameSpeed() {
  gameSpeed = parseInt(
    document.querySelector("input[name='difficulty']:checked").value
  );
  clearInterval(gameInterval);
  gameInterval = setInterval(draw, gameSpeed);
}

// Fonction pour afficher le menu principal
function showMenu() {
  document.getElementById("menu").style.display = "flex";
}

// Afficher le menu principal au démarrage
showMenu();
