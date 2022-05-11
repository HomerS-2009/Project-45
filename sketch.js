var alien;
var health;
var parts;
var scavenger;
var ship;
var gun;
var mars;
var robot;
var king;
var sneaky;
var astronaut;
var guard;
var alienImg;
var partsImg;
var scavengerImg;
var shipImg;
var gunImg;
var marsImg;
var robotImg;
var kingImg;
var sneakyImg;
var astronautImg;
var guardImg;

function preload(){
    alienImg = loadImage("sl/alien.png");
    partsImg = loadImage("sl/parts.png");
    scavengerImg = loadImage("sl/scavenger.png");
    shipImg = loadImage("sl/ship.png");
    gunImg = loadImage("sl/gun.png");
    marsImg = loadImage("sl/mars.jpg");
    robotImg = loadImage("sl/robot.png");
    kingImg = loadImage("sl/king.png");
    sneakyImg = loadImage("sl/sneaky.png");
    astronautImg = loadImage("sl/astronaut.png");
    guardImg = loadImage("sl/guard.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    mars = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    mars.addImage(marsImg)
    mars.scale = 3.3

    astronaut = createSprite(500,750)
    astronaut.addImage(astronautImg)
    astronaut.scale = 0.6

    robot = createSprite(100,750)
    robot.addImage(robotImg)
    robot.scale = 0.5

}

function draw() {
  background(0);  

  drawSprites();
}