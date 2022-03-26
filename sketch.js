var background;
var cube;
var orange;
var relax;


function preload(){
  background = loadImage("background.png");
  orange = loadImage("orange.png");
}

function setup() {
  createCanvas(600,500);

  
  image(background, 0,0);

  cube = createSprite(400, 200, 50, 50);
  cube.addImage(orange);
  cube.scale = 0.1

  relax = text("Relax...Just color in the background", 50, 50);
  
  
  
  
  
  
}

function draw() {
  
  
  drawSprites();

  if (keyDown(UP_ARROW)){
    cube.y -=5;
  }
  if (keyDown(DOWN_ARROW)){
    cube.y +=5;
  }
  if (keyDown(RIGHT_ARROW)){
    cube.x +=5;
  }
  if (keyDown(LEFT_ARROW)){
    cube.x -=5;
  }
}