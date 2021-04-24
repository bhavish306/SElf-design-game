var bgimage,backgroundimg;
var spy,spyimg;

function preload(){
  bgimage= loadImage("background.png");
  spyimg = loadImage("spy.png");
}

function setup() {
  createCanvas(700,900);
  backgroundimg = createSprite(350, 450, 700, 900);
  backgroundimg.addImage("background",bgimage);

  spy = createSprite(350,800,40,40);
  spy.addImage("ball",spyimg);
  spy.scale =0.1;

}

function draw() {
  drawSprites();
}