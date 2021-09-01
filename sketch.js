var garden,rabbit;
var gardenImg,rabbitImg;
var apple ,appleGroup ,appleIMG
var orange , leaf ,orangeIMG, leafIMG
var score=0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIMG=loadImage("apple.png");
  orangeIMG=loadImage("orangeLeaf.png");
  leafIMG=loadImage("leaf.png"); 
}

function setup(){
  spawnAPPLE();

  createCanvas(400,400);
  
apple.addImage("apples",appleIMG);

  // Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}
//"apple.png"
//"leaf.png"

function draw() {

  text("Score: "+ score, 200,200);
  console.log(score);
  background(0);
  spawnAPPLE();
  console.log(score);

  if(rabbit.isTouching(apple))
  {
    score++;
    apple.visble=false
  }
  if(rabbit.isTouching(orange))
  {
    score++;
    orange.visble=false
  }
  if(rabbit.isTouching(leaf))
  {
    score++;
    leaf.visble=false
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  leaf.lifetime=300;
  orange.lifetime=300;
  apple.lifetime=300;
  drawSprites();
}


function spawnAPPLE(){
  if (frameCount % 120 === 0){
    var rand = Math.round(random(1,400))
    apple = createSprite(rand,0,10,10);
    apple.addImage("apple" ,appleIMG)
    apple.scale=0.1
    apple.velocityY = 6;
  }
  if (frameCount % 150 === 0){
    var rand = Math.round(random(1,400))
    orange = createSprite(rand,0,10,10)
    orange.addImage("orange" ,orangeIMG)
    orange.scale=0.1
    orange.velocityY = 6;
    //generate random obstacles
  }
    if (frameCount % 180 === 0){
      var rand = Math.round(random(1,400))
      leaf = createSprite(rand,0,10,10)
      leaf.addImage("leaf" ,leafIMG)
      leaf.scale=0.1
      leaf.velocityY = 6;
  }
}
ground.addImage("ground",groundImage);