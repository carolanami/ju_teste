var personagem ;
var color;
function setup() {
  createCanvas(400,400);
  personagem = createSprite(200,200,100,100);
  color = "yellow";
}

function draw() 
{
  if(keyDown("right")){
    color = "red";
 }
 if(keyDown("left")){
  color = "yellow";
}
  background(color);
 drawSprites();
}




