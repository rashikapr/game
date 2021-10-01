var virus1,virus2,virus3;
var zombie1,zombie2;
var girl,backgroundimg;
var virus1img,virus2img,virus3img,zombie1img,zombie2img,girlimg;

function preload(){
  backgroundimg = loadImage("images/hospital.jpg");
  virus1img= loadImage("images/virus1.png");
  virus2img= loadImage("images/virus2.png");
  virus3img= loadImage("images/virus3.png");
  zombie1img= loadImage("images/zombie1.png");
  zombie2img= loadImage("images/zombie2.png");
  girlimg= loadImage("images/girl.png");
  dropletimg=loadImage("images/waterdrop.png");
  sanitizerimg=loadImage("images/sanitizer.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  girl=createSprite(windowWidth/2-600,windowHeight/2+100,50,50);
  girl.addImage("girl",girlimg);
  girl.scale=0.98;

  sanitizer=createSprite(windowWidth/2-480,windowHeight/2+100,50,50);
  sanitizer.addImage("sanitizer",sanitizerimg);
  sanitizer.scale=0.05;
  
}

function draw() {
  background(backgroundimg);
  drawSprites();
}
