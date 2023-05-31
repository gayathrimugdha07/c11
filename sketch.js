
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")


}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(70,145,20,50)
 trex.scale=0.6
 ground=createSprite(300,180,1000,20)
 trex.addAnimation("running",trex_running)
}

function draw(){
  background("white")
  if (keyDown("space")){
trex.velocityY=-10
  }
  trex.velocityY+=0.8
  trex.collide(ground)
  drawSprites()

}
