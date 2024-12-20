// food.js

/**
 * Génère une position aléatoire pour la nourriture.
 *
 * Cette fonction crée un objet représentant la position de la nourriture sur la grille.
 * La position est choisie aléatoirement pour s'assurer qu'elle est toujours dans les limites du canvas.
 *
 * @param {number} box - La taille d'une case de la grille en pixels.
 * @param {HTMLCanvasElement} canvas - Le canvas sur lequel dessiner la nourriture.
 * @returns {{x: number, y: number}} - Un objet représentant les coordonnées `x` et `y` de la nourriture.
 */
export function generateFood(box, canvas) {
  const x = Math.floor(Math.random() * (canvas.width / box)) * box;
  const y = Math.floor(Math.random() * (canvas.height / box)) * box;
  return { x, y };
}

/**
 * Dessine la nourriture sur le canvas.
 *
 * Cette fonction affiche la nourriture en utilisant un cercle rouge. La position de la nourriture
 * est spécifiée par les coordonnées passées en argument. La taille du cercle est déterminée par `box`.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {{x: number, y: number}} food - L'objet représentant la position de la nourriture avec les coordonnées `x` et `y`.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille du cercle de la nourriture.
 */
export function drawFood(ctx, food, box) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(food.x + box / 2, food.y + box / 2, box / 2, 0, Math.PI * 2);
  ctx.fill();
}
