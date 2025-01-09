/**
 * Vérifie si le serpent entre en collision avec lui-même ou les murs.
 *
 * @param {Snake} snake - L'objet serpent.
 * @param {number} canvasWidth - La largeur du canvas.
 * @param {number} canvasHeight - La hauteur du canvas.
 * @returns {boolean} - Retourne `true` si une collision est détectée, `false` sinon.
 */
export function checkCollision(snake, canvasWidth, canvasHeight) {
  // Collision avec les murs
  if (
    snake.head.x < 0 ||
    snake.head.x >= canvasWidth / 20 ||
    snake.head.y < 0 ||
    snake.head.y >= canvasHeight / 20
  ) {
    return true;
  }

  // Collision avec le corps du serpent
  for (let i = 1; i < snake.body.length; i++) {
    if (snake.head.x === snake.body[i].x && snake.head.y === snake.body[i].y) {
      return true;
    }
  }

  return false;
}
