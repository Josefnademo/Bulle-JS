/**
 * Classe représentant la nourriture dans le jeu.
 */
export class Food {
  /**
   * Crée une instance de la nourriture avec des coordonnées aléatoires.
   *
   * @param {number} gridSize - La taille de la grille du jeu.
   * @param {number} canvasWidth - La largeur du canvas.
   * @param {number} canvasHeight - La hauteur du canvas.
   */
  constructor(gridSize, canvasWidth, canvasHeight) {
    this.gridSize = gridSize;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.position = this.generatePosition();
  }

  /**
   * Génére une nouvelle position aléatoire pour la nourriture.
   *
   * @returns {{x: number, y: number}} - La nouvelle position de la nourriture.
   */
  generatePosition() {
    const x = Math.floor(Math.random() * (this.canvasWidth / this.gridSize));
    const y = Math.floor(Math.random() * (this.canvasHeight / this.gridSize));
    return { x, y };
  }

  /**
   * Dessine la nourriture sur le canvas.
   *
   * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
   */
  draw(ctx) {
    ctx.fillStyle = "red"; // Couleur de la nourriture
    ctx.fillRect(
      this.position.x * this.gridSize, // Position X de la nourriture
      this.position.y * this.gridSize, // Position Y de la nourriture
      this.gridSize, // Taille de la nourriture
      this.gridSize // Taille de la nourriture
    );
  }
}
