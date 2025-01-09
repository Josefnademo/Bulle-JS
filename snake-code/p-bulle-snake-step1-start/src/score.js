/**
 * Affiche le score sur le canvas.
 *
 * Cette fonction affiche le score actuel dans le coin supérieur gauche du canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher.
 */
export function drawScore(ctx, score) {
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 10, 20);
}
