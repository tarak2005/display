var base, side1 , side2, Ground,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ballObj= new paper(200,100,20);

	base= createSprite(600,635,200,20);
	

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	Ground = createSprite(400, 650, 800, 10);

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);



	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
 
 ballObj.display();
}






function keyPressed(){
if(keyCode=== UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});



}


	
}



