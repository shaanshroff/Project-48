//variables
var bgImage;
var wall;
var player;
var playerImage
var ball,ballImage


var playerScore =  0
var playerLife = 2
var gameState = "serve"

function preload(){
  bgImage = loadImage("Images/bg.jpeg")
 // playerImage = loadAnimation("Images/boyimage2.png","Images/boyimage.png")
  playerImage = loadImage("Images/boyimage.png")
  ballImage = loadImage("Images/ball.png")
}

function setup() {
  createCanvas(800,600);
  wall = createSprite(750,305,50,600)
  wall.shapeColor = "#3b581d"
  createEdgeSprites()
  player = createSprite(100,400,80,200)
  player.addImage("player",playerImage)
  player.scale = 0.5
  player.debug = true
  player.setCollider("circle",80,20,80)
  ball = createSprite(350,300,10,10)
  ball.addImage("ball",ballImage)
  ball.scale = 0.2
  bottomEdge = createSprite(400,600,1000,10)
  topEdge = createSprite(400,1,1000,10)
}

function draw() 
{
  background(bgImage);
  fill("black")
  text("Score: ",540,20)
  fill("black")
  text("Life: ",545,50)
  if (keyDown("up")){
    player.y-=4
  }
  if (keyDown("down")){
    player.y+=4
  }

  if(ball.x <=0) {
    playerLife = playerLife - 1
    ball.x = 350
  }

  if(ball.isTouching(wall)){
    playerScore+=1
  }

  ball.bounceOff(wall);
  ball.bounceOff(player);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  text(playerScore, 575,20)
  text(playerLife, 575,50)

  drawSprites()
  if (keyDown("space")){
    mousePressed()
  }
  if(playerScore%5==0){
    ball.velocityX += 0.05
    ball.velocityY += 0.05
  }
  if (playerLife==0) {
    ball.velocityX = 0
    ball.velocityY = 0
    fill("red")
    text("Game Over",350,300)
  }

}

function mousePressed () {
  ball.velocityX = 3;
  ball.velocityY = 4;
}


