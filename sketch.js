
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const MouseConstraint = Matter.MouseConstraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function setup() {
	var canvas = createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//let canvasmouse = Mouse.create(canvas.elt);
	//canvasmouse.pixelRatio = pixelDensity();

	//let options = {

	//	mouse: canvasmouse

	//}

	//mConstraint = MouseConstraint.create(engine,options);
	//World.add(world,mConstraint);

	roof = new Roof(360,300,width/2,30);

	//bobDiameter=40; 

	//startBobPositionX=width/2; 
	//startBobPositionY=height/4+500; 

	//bobObject1 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	//bobObject2 = new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	//bobObject3 = new bob(startBobPositionX,startBobPositionY,bobDiameter); 
	//bobObject4 = new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	//bobObject5 = new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	bob1 = new bob(250,600);
	bob2 = new bob(300,600);
	bob3 = new bob(350,600);
	bob4 = new bob(400,600);
	bob5 = new bob(450,600);

	rope1 = new Rope(bob1.body,{x:250, y:300});
	rope2 = new Rope(bob2.body,{x:300, y:300});
	rope3 = new Rope(bob3.body,{x:350, y:300});
	rope4 = new Rope(bob4.body,{x:400, y:300});
	rope5 = new Rope(bob5.body,{x:450, y:300});

	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);

  rectMode(CENTER);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function mouseDragged(){

	//Matter.Body.applyForce(bob1.body, bob1.body.postion, {x:-50,y:-45});
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});

}
