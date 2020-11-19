var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(2000,800);
  thickness=random(22,83);
bullet=createSprite(50, 200, 50, 50);
 wall=createSprite(300,200,thickness,height/2);
 speed=random(223,321);
 weight=random(30,52);
 bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    bullet.shapeColor=color(7,56,229);
  }
  if(damage<10)
  {
    bullet.shapeColor=color(47,82,99);
  }
}
   
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}