/**
 * Classe représentant le serpent dans le jeu.
 */
export class Snake {
  /**
   * Crée une instance du serpent.
   *
   * @param {number} gridSize - La taille d'une case sur la grille du jeu, utilisée pour définir la taille du serpent.
   */
  constructor(gridSize) {
    this.gridSize = gridSize; // Taille d'une case
    this.body = [{ x: 5, y: 5 }]; // Corps du serpent, débutant avec un seul segment
    this.direction = { x: 1, y: 0 }; // Direction initiale du serpent (vers la droite)
    this.head = this.body[0]; // La tête du serpent est le premier segment
  }

  /**
   * Réinitialise le serpent à sa position de départ.
   */
  reset() {
    this.body = [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
    ]; // Position initiale du serpent
    this.direction = { x: 1, y: 0 }; // Direction initiale (vers la droite)
    this.head = this.body[0]; // La tête du serpent
  }

  /**
   * Déplace le serpent dans la direction actuelle.
   */
  move() {
    const newHead = {
      x: this.head.x + this.direction.x, // Nouvelle position X de la tête
      y: this.head.y + this.direction.y, // Nouvelle position Y de la tête
    };
    this.body.unshift(newHead); // Ajoute la nouvelle tête au début du corps(ce qui fait avancer la tête).
    this.head = newHead; // Met à jour la tête du serpent
    this.body.pop(); // Retire le dernier segment (si le serpent ne mange pas de nourriture )
  }

  /**
   * Fait grandir le serpent en ajoutant un segment supplémentaire à la fin.
   */
  grow() {
    const newSegment = { ...this.body[this.body.length - 1] }; // Copie le dernier segment du serpent
    this.body.push(newSegment); // Ajoute le nouveau segment à la fin du serpent
  }

  /**
   * Dessine le serpent sur le canvas.
   *
   * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
   */
  draw(ctx) {
    ctx.fillStyle = "darkgreen"; // Définir la couleur du serpent en vert(tete)
    for (let segment of this.body) {
      // Dessine chaque segment du corps du serpent
      ctx.fillRect(
        segment.x * this.gridSize, // Position X du segment
        segment.y * this.gridSize, // Position Y du segment
        this.gridSize, // Largeur du segment
        this.gridSize // Hauteur du segment
      );
      // Draw body with a lighter color
      ctx.fillStyle = "lightgreen"; //définit la couleur de remplissage pour les formes que l'on dessine
      for (let i = 1; i < this.body.length; i++) {
        ctx.fillRect(
          this.body[i].x * this.gridSize, //this.gridSize pour s'assurer que les segments sont correctement dimensionnés en fonction de la taille de la grille de jeu.
          this.body[i].y * this.gridSize,
          this.gridSize,
          this.gridSize
        );
      }
    }
  }
}
