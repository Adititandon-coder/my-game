const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var backgroungImg;
var walkingGirl;
var girl;
var bird_flying;
var bird1;

function preload() {
  bg = loadImage("background.jpg");
  walkingGirl = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png");
  bird_flying = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  backgroundImg = createSprite(250,250,20,30);
  backgroundImg.addImage("moving",bg)
  backgroundImg.scale = 1.6;
  backgroundImg.velocityX=-1;

 
  girl = createSprite(90, 1000, 20, 20);
  girl.addAnimation("walking",walkingGirl);
  girl.scale = 1.5;

  bg.velocityX=2

  bird1=new Bird(800,550,30,40)
  bird1.addAnimation("flying",bird_flying);
  bird1.scale=0.3
}

function draw() {
  background("white");
  Engine.update(engine);


  drawSprites();
}
