var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(85,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(293,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(707,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    console.log(ball.shapeColor);

    if(ball.velocityX > 0 || ball.velocityY > 0){
        music.play();
    }

    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
  
    } 

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
      
    } 

    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
    } 

    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        
    } 

    ball.bounceOff(edges);
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);

    drawSprites();
}
