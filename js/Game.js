const scale = document.getElementById("scale");
const speed = document.getElementById("speed");
const btn = document.getElementById("NewGame");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//platno
ctx.fillStyle = "#4c4c4c";
ctx.fillRect(0, 0, canvas.width, canvas.height);
btn.addEventListener("click", () => {
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
    this.set();

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
    scale.value = 25;
    speed.value = 1;
    btn.disabled = false;
    btn.innerHTML = 'Start';
    ctx.font = '50px Arial';
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2);
  },

  draw: function (snake, food) {
    ctx.fillStyle = "#4c4c4c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.position();
    snake.move();
  },

  set: function ()  {
    this.scale = Number(scale.value);
    switch(speed.value){
      case "1":
        this.speed = 500;
        break;
      case "2":
        this.speed = 400;
        break;
      case "3":
        this.speed = 300;
        break;
      case "4":
        this.speed = 200;
        break;
      case "5":
        this.speed = 100;
        break;
    }
    btn.disabled = true;
    btn.innerHTML = 'Processing...';
  },
};