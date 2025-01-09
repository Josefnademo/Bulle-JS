/**
 * Gère les contrôles du serpent via les touches du clavier.
 *
 * @param {Snake} snake - L'objet serpent.
 */
export function setControls(snake) {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (snake.direction.y !== 1) snake.direction = { x: 0, y: -1 }; // Haut
        break;
      case "ArrowDown":
        if (snake.direction.y !== -1) snake.direction = { x: 0, y: 1 }; // Bas
        break;
      case "ArrowLeft":
        if (snake.direction.x !== 1) snake.direction = { x: -1, y: 0 }; // Gauche
        break;
      case "ArrowRight":
        if (snake.direction.x !== -1) snake.direction = { x: 1, y: 0 }; // Droite
        break;
    }
  });
}
