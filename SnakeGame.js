const canvas =document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//platno
ctx.fillStyle = '#4c4c4c';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let game = {
    x: 0, 
    y: 0,
    scale: 25,
    columns: 0,
    rows: 0,
    timer: null,
    speed: 250,

     play: function() {
        this.columns = canvas.width / this.scale;
        this.rows = canvas.height / this.scale;

        let snake = new Snake();
        let food = new Food();

        document.addEventListener('keydown', function(event){
            snake.direction(event.code);
        });

        food.position();

        this.timer = setInterval(() => {
            ctx.fillStyle = '#4c4c4c';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            food.draw();
            snake.position();
            snake.move();
            if(snake.eating(food.x, food.y)){
                snake.count++;
                snake.tailPos.push({x: food.x, y: food.y});
                food.position();

            }
            // if(snake.bite()){
            //     this.gameOver();
            //     console.log("over");
            // }

        }, this.speed);


    }//, 
    // gameOver: () => {
    //     clearInterval(this.timer);
    //     this.time = null;
    // }
}

game.play();

function Snake(){
    this.x = 0,
    this.y = 0,
    this.speedX = game.scale,
    this.speedY = 0,
    this.count = 0,
    this.tailPos = [],
    
    this.move = function(){
        ctx.fillStyle = 'green';
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
    },

    this.position = function(){
        for (let i = 0; i < this.tailPos.length - 1; i++) {
          this.tailPos[i] = this.tailPos[i + 1];
        }

        this.tailPos[this.count - 1] = { x: this.x, y: this.y };

        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y == canvas.height){
            this.y = 0;
        }
        if (this.x == canvas.width){
            this.x = 0;
        }
        if (this.y < 0){
            this.y = canvas.height;
        }
        if (this.x < 0){
            this.x = canvas.width;
        }
    },

    this.direction = function(key){
        
        switch(key){
            case 'ArrowUp': 
                this.speedY = -game.scale;
                this.speedX = 0;
                break;
            case 'ArrowDown': 
                this.speedY = game.scale;
                this.speedX = 0;
                break;
            case 'ArrowLeft': 
                this.speedY = 0;
                this.speedX = -game.scale;
                break;
            case 'ArrowRight': 
                this.speedY = 0;
                this.speedX =game.scale;
                break;
        }
    },
    this.eating = function(x ,y){
        if(this.x == x && this.y == y) {
            return true;
        }
    }//,
    /*this.bite = function(){
        this.tailPos.forEach((value) =>{
            if(value.x == this.x && value.y == this.y){
                return true;
            }
        });
    }*/
}

function Food() {
    this.x = 0,
    this.y = 0,
    this.position = function(){
        this.x = (Math.floor(Math.random() * game.rows - 1) + 1) * game.scale;
        this.y = (Math.floor(Math.random() * game.columns - 1) + 1)* game.scale;
    },
    this.draw = () => {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, game.scale, game.scale);
    }

}