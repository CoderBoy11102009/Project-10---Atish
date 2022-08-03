var sea,ship;
var seaImg,shipImg;

function preload(){
  //The ship
  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  //Canvas
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  //The ship
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  //The background
  background(0);
  sea.velocityX = -3;

  //The sea
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

 
  drawSprites();
}