// controls.js

/**
 * Traite les changements de direction du serpent en fonction des touches du clavier.
 *
 * Cette fonction reçoit un événement `keydown` et la direction actuelle du serpent, puis retourne
 * la nouvelle direction en fonction de la touche appuyée. Si la touche appuyée n'est pas valide
 * pour le mouvement actuel, la direction reste inchangée.
 *
 * @param {KeyboardEvent} event - L'événement clavier.
 * @param {string} currentDirection - La direction actuelle du serpent.
 * @returns {string} - La nouvelle direction du serpent ("LEFT", "UP", "RIGHT", "DOWN").
 */
export function handleDirectionChange(event, currentDirection) {
  switch (event.key) {
    case "ArrowLeft":
      if (currentDirection !== "RIGHT") return "LEFT";
      break;
    case "ArrowUp":
      if (currentDirection !== "DOWN") return "UP";
      break;
    case "ArrowRight":
      if (currentDirection !== "LEFT") return "RIGHT";
      break;
    case "ArrowDown":
      if (currentDirection !== "UP") return "DOWN";
      break;
    default:
      break;
  }
  return currentDirection;
}
