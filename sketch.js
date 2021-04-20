const Engine =Matter.Engine
//namespacing
const World=Matter.World
const Bodies=Matter.Bodies
var engine, world, ground;
var circ;

function setup(){
    var canvas = createCanvas(400,400);
    //creating an engine for your world
    engine = Engine.create();
    //create and connect a world to engine
    world = engine.world;
   //circular body
   var optns ={isStatic:false, restitution:0.8}
 circ=Bodies.circle(100, 20, 20,optns);
 console.log(circ)  
 //adding body to your world
 World.add(world,circ)
var grnd_optns= {isStatic:true}
 ground=Bodies.rectangle(10, 250, 400 , 10,grnd_optns)
 World.add(world,ground)
}

function draw(){
    //updating engine to new engine
    Engine.update(engine);
    background(0);
    //ellipseMode
    ellipse(circ.position.x, circ.position.y, 20, 20);
    rect(ground.position.x, ground.position.y,400,10)
 
}
