var player,  stack,  coin,  rb,  gb,  zombie, obstacle, bg, invisible, invisible2, invisible3, smoke ;
var playerImg, stackImg, coinImg, rbImg, gbImg, zombieImg,obstacleImg, bgImg, smokeImg;
var tplayer;
var tImg;

function preload(){
 playerImg = loadAnimation("images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png", "images/boy5.png", "images/boy6.png", "images/boy7.png","images/boy8.png");
 coinImg = loadAnimation("images/coin1.png", "images/coin2.png", "images/coin3.png", "images/coin4.png", "images/coin5.png","images/coin6.png", "images/coin7.png", "images/coin8.png", "images/coin9.png", "images/coin10.png");
 tImg = loadAnimation("images/t1.png","images/t2.png","images/t3.png","images/t4.png","images/t5.png","images/t6.png","images/t7.png","images/t8.png");

 stackImg = loadImage("images/bstone.png");
 rbImg = loadImage("images/red booster.png");
 gbImg = loadImage("images/green booster.png");
 zombieImg = loadImage("images/zombie.png");
 obstacleImg = loadImage("images/obstacle.png");
 bgImg = loadImage("images/bg.jpeg");
 smokeImg = loadImage("images/smoke1.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  
  bg = createSprite(displayWidth/2, -1, displayWidth+500, displayHeight );
  bg.addImage("bg", bgImg);
  bg.scale = 1.1;
  bg.velocity.y = 3;
  

  player = createSprite(displayWidth/2+2, displayHeight/2+20, 50, 50);
  player.addAnimation("plr", playerImg);

  invisible = createSprite(displayWidth, displayHeight/2+150, 100, 10);
  invisible.visible = false;

  tplayer = createSprite(displayWidth/2+2, displayHeight/2+20, 50, 50);
  tplayer.addAnimation("t",tImg);
  tplayer.visible = false;

  //stack = createSprite(displayWidth/2, displayHeight-225, 50, 50);
  //stack.addImage("stk", stackImg);
  //stack.scale = 0.4;

  

}

function draw() {
  background(63, 63, 63); 
  
  camera.position.x = displayWidth/2;
  camera.position.y = player.y;

  console.log(bg.y);


  if (bg.y > 450){
    bg.y = 300;
  }

  if(keyDown("space" )) {
    player.velocityY = -10;
  }

  if(keyDown("k")){
    player.visible = false;
    tplayer.visible = true;
  }

  if(keyWentUp("k")){
    player.visible = true;
    tplayer.visible = false;
  }

  //if(player.x <= displayWidth/2 + 452){

  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 10;
  }

//}
  
    player.velocityY = player.velocityY + 0.8 
    player.collide(invisible);
    

  drawSprites();
}