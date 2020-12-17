const canvas =document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//platno
ctx.fillStyle = '#4c4c4c';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let game = {
    x: 0, 
    y: 0,
    scale: 10,
    columns: canvas.width / this.scale,
    rows: canvas.height / this.scale,
    timer: null,
    speed: 250,

     play: function() {
        let snake = new Snake();
        //let food = new Food();
        document.addEventListener('keydown', function(event){
            snake.direction(event.code);
        });
       this.timer = setInterval(() => {
            ctx.fillStyle = '#4c4c4c';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            snake.position();

            snake.head();
        }, this.speed);


    }
}

game.play();

function Snake(){
    this.x = 0,
    this.y = 0,
    this.speedX = game.scale,
    this.speedY = 0,
    
    this.head = function(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, game.scale, game.scale);
    },

    this.position = function(){
        this.y += this.speedY;
        this.x += this.speedX;
    },

    this.direction = function(key){
        
        switch(key){
            case 'ArrowUp': 
                this.speedY -= game.scale;
                this.speedX = 0;
                break;
            case 'ArrowDown': 
                this.speedY += game.scale;
                this.speedX = 0;
                break;
            case 'ArrowLeft': 
                this.speedY = 0;
                this.speedX -= game.scale;
                break;
            case 'ArrowRight': 
                this.speedY = 0;
                this.speedX +=game.scale;
                break;
        }
    }
}