var Boom;
function setup() {
  createCanvas(400,400);
  background("white");
Boom = createSprite(200,200,20,20);
}

function draw() 
{
 
  if(keyDown(DOWN_ARROW)){
    background("red");
  }
if(keyDown(UP_ARROW)){
  background("yellow");
}
if(keyDown(RIGHT_ARROW)){
  background("orange");
}
if(keyDown(LEFT_ARROW)){
  background("Blue");
}
drawSprites();
}




