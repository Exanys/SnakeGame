function Food() {
  (this.x = 0),
    (this.y = 0),
    (this.position = function () {
      this.x = (Math.floor(Math.random() * game.rows - 1) + 1) * game.scale;
      this.y = (Math.floor(Math.random() * game.columns - 1) + 1) * game.scale;
    }),
    (this.draw = () => {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, game.scale, game.scale);
    });
}