var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  gameObject1 = createSprite(100,100,80,30);
gameObject1.shapeColor = "black"

  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject2 = createSprite(300,100, 80,30);
gameObject2.shapeColor = "maroon";
  
gameObject3 = createSprite(500,100, 80,30);
gameObject3.shapeColor = "black";
gameObject4 = createSprite(700, 100, 80,30);
gameObject4.shapeColor = "maroon";
movingRect.debug = true;

}

function draw() {
  background("Lightblue");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(gameObject2, movingRect)){
movingRect.shapeColor = "blue";
gameObject2.shapeColor = "green";
  }
  else {
  movingRect.shapeColor = "lightgreen";
gameObject2.shapeColor = "purple";
  }
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
 return true;
}
else {
  return false;
}



}