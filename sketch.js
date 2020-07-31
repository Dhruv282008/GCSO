var car1 , car2,car3,car4;
var edge1,edge2,edge3,edge4;
var object1,object2;
function setup() {
  car1 = createSprite(200,50,20,20);
  car1.shapeColor = "yellow";
  car2 = createSprite(300,50,20,20);
  car2.shapeColor = "red";
  car3 = createSprite(300,250,20,20);
  car3.shapeColor = "orange";
  car4 = createSprite(350,350,20,20);
  car4.shapeColor = "green";
  car1.velocityX = +5;
  car2.velocityX = -5;

  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  drawSprites();
 
  createEdgeSprites();
  bounceOff(car1,car2);
  if (car1.x - car2.x < car2.width/2 + car1.width/2
    && car2.x - car1.x < car2.width/2 +car1.width/2) {
  car1.velocityX = car1.velocityX * (-1);
  car2.velocityX = car2.velocityX * (-1);
    }
    if (car1.y - car2.y < car2.height/2 + car1.height/2
      && car2.y - car1.y < car2.height/2 + car1.height/2){
      car1.velocityY = car1.velocityY * (+1);
      car2.velocityY = car2.velocityY * (-1);
    }
  
}
function bounceOff(car1,car2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2) {
object1.velocityX = object1.velocityX * (-1);
object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
&& object2.y - object1.y < object2.height/2 + object1.height/2){
object1.velocityY = object1.velocityY * (-1);
object2.velocityY = object2.velocityY * (-1);
}
}