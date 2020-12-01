
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(200,650,5000,15);
	paper=new Paper(115,645,50);
	rect1= new Dustbin(1000,578,20,130);
	rect2=new Dustbin(1130,640,250,20);
	rect3=new Dustbin(1260,578,20,130);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150})
	}
}

