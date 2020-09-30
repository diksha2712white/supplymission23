var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.0,friction:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	

 	fill ("red");

 	boxLeftBody = Bodies.rectangle(300,610, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	
 	boxBottomBody = Bodies.rectangle(400,655, 200,10 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	
 	boxRightBody = Bodies.rectangle(500,610, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  fill("red");
 rect(boxBottomBody.position.x,boxBottomBody.position.y,200,10);
 rect(boxLeftBody.position.x,boxLeftBody.position.y,20,100);
 rect(boxRightBody.position.x,boxRightBody.position.y,20,100);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
 
  if(packageBody.position.y>600){
	packageBody.position.x =300;
	packageBody.position.y=700;
;  }
drawSprites();
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



