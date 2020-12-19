function Snake() {
  (this.x = 0),
    (this.y = 0),
    (this.speedX = game.scale),
    (this.speedY = 0),
    (this.count = 0),
    (this.tailPos = []),
    (this.move = function () {
      ctx.fillStyle = "green";
      ctx.fillRect(this.x, this.y, game.scale, game.scale);
      for (let i = 0; i < this.tailPos.length; i++) {
        ctx.fillStyle = "darkgreen";
        ctx.fillRect(
          this.tailPos[i].x,
          this.tailPos[i].y,
          game.scale,
          game.scale
        );
      }
    }),
    (this.position = function () {
      for (let i = 0; i < this.tailPos.length - 1; i++) {
        this.tailPos[i] = this.tailPos[i + 1];
      }

      this.tailPos[this.count - 1] = { x: this.x, y: this.y };

      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y == canvas.height) {
        this.y = 0;
      }
      if (this.x == canvas.width) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.y = canvas.height;
      }
      if (this.x < 0) {
        this.x = canvas.width;
      }
    }),
    (this.direction = function (key) {
      switch (key) {
        case "ArrowUp":
          if(this.speedY != game.scale && this.speedX != 0){ 
            this.speedY = -game.scale;
            this.speedX = 0;}
          break;
        case "ArrowDown":
          if(this.speedY != -game.scale && this.speedX != 0){
            this.speedY = game.scale;
            this.speedX = 0;
          }
          break;
        case "ArrowLeft":
          if(this.speedY != 0 && this.speedX != game.scale){          
            this.speedY = 0;
            this.speedX = -game.scale;}
          break;
        case "ArrowRight":
          if(this.speedY != 0 && this.speedX != -game.scale){
            this.speedY = 0;
            this.speedX = game.scale;
          }
          break;
      }
    }),
    (this.eating = function (x, y) {
      if (this.x == x && this.y == y) {
        return true;
      }
    }),
    (this.bite = function () {
      for (let i = 0; i < this.tailPos.length - 1; i++) {
        if (this.tailPos[i].x == this.x && this.tailPos[i].y == this.y) {
          return true;
        }
      }
    });
}
