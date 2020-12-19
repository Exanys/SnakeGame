function Snake() {
  (this.x = 0),
    (this.y = 0),
    (this.type = 1),
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
          if (this.speedY != game.scale && this.speedX != 0) {
            this.speedY = -game.scale;
            this.speedX = 0;
            this.type = 4;
          }
          break;
        case "ArrowDown":
          if (this.speedY != -game.scale && this.speedX != 0) {
            this.speedY = game.scale;
            this.speedX = 0;
            this.type = 3;
          }
          break;
        case "ArrowLeft":
          if (this.speedY != 0 && this.speedX != game.scale) {
            this.speedY = 0;
            this.speedX = -game.scale;
            this.type = 2;
          }
          break;
        case "ArrowRight":
          if (this.speedY != 0 && this.speedX != -game.scale) {
            this.speedY = 0;
            this.speedX = game.scale;
            this.type = 1;
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
    this.eyes = function () {
      let del = game.scale / 10;
      switch (this.type) {
        case 1:
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.arc(
            this.x + game.scale - del * 2,
            this.y + del * 2,
            del * 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.arc(
            this.x + game.scale - del * 2,
            this.y + del * 2,
            del,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.arc(
            this.x + game.scale - del * 2,
            this.y + game.scale - del * 2,
            del * 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.arc(
            this.x + game.scale - del * 2,
            this.y + game.scale - del * 2,
            del,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          break;
        case 2:
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.arc(this.x + del * 2, this.y + del * 2, del * 2, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.arc(this.x + del * 2, this.y + del * 2, del, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.arc(
            this.x + del * 2,
            this.y + game.scale - del * 2,
            del * 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.arc(
            this.x + del * 2,
            this.y + game.scale - del * 2,
            del,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          break;
        case 3:
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.arc(
            this.x + del * 2,
            this.y + game.scale - del * 2,
            del * 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.arc(
            this.x + del * 2,
            this.y + game.scale - del * 2,
            del,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.arc(
            this.x + game.scale - del * 2,
            this.y + game.scale - del * 2,
            del * 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.arc(
            this.x + game.scale - del * 2,
            this.y + game.scale - del * 2,
            del,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          break;
        case 4:
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.arc(this.x + del * 2, this.y + del * 2, del * 2, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.arc(this.x + del * 2, this.y + del * 2, del, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = "white";
          ctx.arc(
            this.x + game.scale - del * 2,
            this.y + del * 2,
            del * 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.arc(
            this.x + game.scale - del * 2,
            this.y + del * 2,
            del,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
          break;
      }
    };
}