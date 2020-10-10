var packageIMG,package,helicopter,helicopterIMG;
var packageBody,groundSprite;
var box1,box2,box3;

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload ()
{
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(1000,700);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  

  package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale = 0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale = 0.8;

	box2 = new box(600, 605, 20,100);
	box1 = new box(500, 645, 200,20);
	box3 = new box(400, 605, 20,100);

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
 	World.add(world, ground);


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	    
	 }
   }
