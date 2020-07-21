var car,wall;
var speed,weight;
var hight;
function setup() {
  createCanvas(1200,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.shapeColor=color(255)
  car.velocityX=speed
 wall= createSprite(1100, 200);
 wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  
 
 
 
  if (wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0 
    var dfarmation=0.5*weight*speed*speed/22509;
  
    if (dfarmation>180){
car.shapeColor=color(255,0,0);
    }
    if (dfarmation<180 && dfarmation>100) {
car.shapeColor=color(230,230,0);
    }
    if (dfarmation<100) {
      car.shapeColor=color(0,255,0);
          }
        }     


  drawSprites();
}
