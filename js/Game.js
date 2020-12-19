// const scale = document.getElementById("scale");
// const speed = document.getElementById("speed");


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//platno
ctx.fillStyle = "#4c4c4c";
ctx.fillRect(0, 0, canvas.width, canvas.height);
document.getElementById("NewGame").addEventListener("click", () => {
  game.play();
});

let game = {
  x: 0,
  y: 0,
  scale: 25,
  columns: 0,
  rows: 0,
  timer: null,
  speed: 250,

  play: function () {
    // this.scale = scale.value;
    // this.speed = speed.value;

    this.columns = canvas.width / this.scale;
    this.rows = canvas.height / this.scale;

    let snake = new Snake();
    let food = new Food();

    document.addEventListener("keydown", function (event) {
      snake.direction(event.code);
    });

    food.position();

    this.timer = setInterval(() => {
      this.draw(snake, food);
      if (snake.bite()) {
        this.gameOver();
      }
      if (snake.eating(food.x, food.y)) {
        snake.count++;
        food.position();
      }
    }, this.speed);
  },
  gameOver: function () {
    clearInterval(this.timer);
    this.timer = null;
  },
  draw: function (snake, food) {
    ctx.fillStyle = "#4c4c4c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.position();
    snake.move();
  },
};
