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
        /////////////////////////////////////////////////////////////////////////majuscules 
        case "W":
        if (snake.direction.y !== 1) snake.direction = { x: 0, y: -1 }; // Haut
        break;
      case "S":
        if (snake.direction.y !== -1) snake.direction = { x: 0, y: 1 }; // Bas
        break;
      case "A":
        if (snake.direction.x !== 1) snake.direction = { x: -1, y: 0 }; // Gauche
        break;
      case "D":
        if (snake.direction.x !== -1) snake.direction = { x: 1, y: 0 }; // Droite
        break;
        /////////////////////////////////////////////////////////////////////////minuscules
        case "w":
          if (snake.direction.y !== 1) snake.direction = { x: 0, y: -1 }; // Haut
          break;
        case "s":
          if (snake.direction.y !== -1) snake.direction = { x: 0, y: 1 }; // Bas
          break;
        case "a":
          if (snake.direction.x !== 1) snake.direction = { x: -1, y: 0 }; // Gauche
          break;
        case "d":
          if (snake.direction.x !== -1) snake.direction = { x: 1, y: 0 }; // Droite
          break;
    }
  });
}
