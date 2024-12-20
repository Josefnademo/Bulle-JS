/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
export function drawScore(ctx, score) {
  ctx.fillStyle = "black"; // Couleur du texte
  ctx.font = "20px Arial"; // Police et taille
  ctx.textAlign = "left"; // Alignement du texte à gauche
  ctx.textBaseline = "top"; // Ligne de base en haut

  // Positionner le texte : 10 pixels du bord gauche et 10 pixels du bord supérieur
  ctx.fillText("Score : " + score, 10, 10);
}
