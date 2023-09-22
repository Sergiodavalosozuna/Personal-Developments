
//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;


//bird 
let birdWidth = 34; //width/height ratio = 408/228 = 17/12 
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;



let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64; //width/height ratio 384/3072 = 1/8
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottompPipeImg;

//physics
let velocityX = -2; //pipes moving left speed
let velocityY = 0;//bird jump speed
let gravity = 0.4; 

let gameOver = false; 
let score = 0; 


window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth
    context = board.getContext("2d"); // used for drawing on the board

    //draw flappy bird
    // context.fillstyle = "green";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height)

    //load images 
    birdImg = new Image();
    birdImg.src = "./Dababy_car_.webp"
    birdImg.onload = function () {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

        //pipes 
        for (let i = 0; i < pipeArray.length; i++) {
            let pipe = placeArray[i];
            pipe.x += velocityX;
            context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
        }
    }

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png"

    bottompPipeImg = new Image();
    bottompPipeImg.src = "./bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500); //every 1.5 seconds 
    document.addEventListener("keydown", moveBird); 
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        retrun;
    }
    context.clearRect(0, 0, board.width, board.height);

    //bird
    velocityY += 
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

}

function placePipes() {
    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: pipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false

    }

    pipeArray.push(topPipe);

}