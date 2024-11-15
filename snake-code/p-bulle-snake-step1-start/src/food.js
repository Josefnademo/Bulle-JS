/**
 * Génère de manière aléatoire la position de la nourriture sur la grille du jeu.
 *
 * La nourriture est placée à une position aléatoire sur la grille, en s'assurant
 * que les coordonnées sont alignées sur la grille en fonction de la taille des cases (box).
 * La position générée est dans les limites du canvas, définies par sa largeur et sa hauteur.
 *
 * @param {number} box - La taille d'une case de la grille en pixels.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @returns {{x: number, y: number}} - Un objet contenant les coordonnées `x` et `y` de la nourriture générée.
 */
export function generateFood(box, canvas) {
  // Calculer les dimensions de la grille
  const rows = Math.floor(canvas.height / box);
  const cols = Math.floor(canvas.width / box);

  // Générer des positions aléatoires pour la nourriture
  const x = Math.floor(Math.random() * cols) * box;
  const y = Math.floor(Math.random() * rows) * box;

  return { x, y };
}

/**
 * Dessine la nourriture sur le canvas à la position spécifiée.
 *
 * Cette fonction utilise le contexte de rendu 2D pour dessiner un rectangle représentant
 * la nourriture à l'emplacement indiqué par les coordonnées `x` et `y`. La taille du rectangle
 * est déterminée par la taille d'une case (box) sur la grille.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {{x: number, y: number}} food - Un objet contenant les coordonnées `x` et `y` où la nourriture doit être dessinée.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de la nourriture.
 */

export function setup() {
  const canvas = document.getElementById('gameCanvas'); // Assurez-vous que le canvas existe
  const ctx = canvas.getContext('2d'); // Obtient le contexte 2D

  const box = 20; // Taille de la case (ajustez selon votre grille)
  
  // Générer la position de la nourriture
  const food = generateFood(box, canvas);
  
  // Dessiner la nourriture
  drawFood(ctx, food, box);
}


function draw() {

  background(200);

 //variable pour couleur
 let c =color(255,220,124);

  //creer un carre
  //colerer
  FileList(c);
  // Rotate around the y-axis.
  rotateY(frameCount * 0.01);

  // Draw the square.
  square(-20, -30, 55);

  //color
  backgroundcolor
}
export function drawFood(ctx, food, box) {
  ctx.fillStyle = '#FF6347'; // Couleur rouge pour la nourriture
  ctx.fillRect(food.x, food.y, box, box); // Dessiner un carré représentant la nourriture
}
window.onload = () => {
  setup(); // Appel de la fonction setup lorsque la page est chargée
};
