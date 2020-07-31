var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight= random(400,1500);
  thickness=random(22,83);

  bullet = createSprite(50,200,60,30);
  bullet.shapeColor = "white";
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0); 
  
  if(hasCollided(bullet,wall)){
    
    bullet.velocityX= 0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor = color(255,0,0);

    }

     if(damage<10){

       wall.shapeColor = color(0,255,0);

     }

  }

  

  drawSprites();
}

function hasCollided (object1,object2){

var  bulletRightEdge = object1.x + object1.width;
var wallLeftEdge = object2.x;
if(bulletRightEdge>=wallLeftEdge){

  return true;

}
return false;
}