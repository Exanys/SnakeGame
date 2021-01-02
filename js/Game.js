const scale = document.getElementById("scale");
const speed = document.getElementById("speed");
const btn = document.getElementById("NewGame");
const results = document.getElementById("results");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//platno
ctx.fillStyle = "#4c4c4c";
ctx.fillRect(0, 0, canvas.width, canvas.height);
btn.addEventListener("click", () => {
  game.play();
  console.log(player.name);
});

let game = {
  x: 0,
  y: 0,
  scale: 25,
  columns: 0,
  rows: 0,
  timer: null,
  speed: 250,
  score: 0,
  currentScore: 0,

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
      this.display();
      if (snake.bite()) {
        this.gameOver();
      }
      if (snake.eating(food.x, food.y)) {
        this.currentScore += this.score;
        snake.count++;
        food.position();
        food.sound();
      }
    }, this.speed);
  },

  gameOver: function () {
    clearInterval(this.timer);
    this.timer = null;
    player.scores.push(this.currentScore);
    this.write();
    scale.value = 20;
    speed.value = 1;
    btn.disabled = false;
    btn.innerHTML = "Start";
    ctx.font = "100px Trebuchet MS";
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
    this.currentScore = 0;
  },

  draw: function (snake, food) {
    ctx.fillStyle = "#4c4c4c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.position();
    snake.move();
    snake.eyes();
  },

  set: function () {
    let a = 0;
    let b = 0;
    this.scale = Number(scale.value);
    switch (this.scale) {
      case 10:
        a = 50;
        break;
      case 20:
        a = 40;
        break;
      case 30:
        a = 30;
        break;
      case 40:
        a = 20;
        break;
      case 50:
        a = 10;
        break;
    }
    switch (speed.value) {
      case "1":
        this.speed = 250;
        b = 10;
        break;
      case "2":
        this.speed = 200;
        b = 20;
        break;
      case "3":
        this.speed = 150;
        b = 30;
        break;
      case "4":
        this.speed = 100;
        b = 40;
        break;
      case "5":
        this.speed = 50;
        b = 50;
        break;
    }
    btn.disabled = true;
    btn.innerHTML = "Processing...";
    this.score = a + b;
  },
  display: function () {
    ctx.font = "40px Trebuchet MS";
    ctx.fillStyle = "#747474";
    ctx.textBaseline = "top";
    ctx.textAlign = "right";
    let txt = 'Score: ' + this.currentScore;
    ctx.fillText(txt, canvas.width, 0);
  },
  write: function(){
    results.innerHTML = '<h2 class="display-4">Results:</h2>';
    results.innerHTML += `<p>Player name: <b>${player.name}</b></p>`;
    results.innerHTML += `<p>Current score: <b>${this.currentScore}</b></p>`;
    results.innerHTML += `<p>Highest score: <b>${player.highestScore()}</b></p>`;
  }
};