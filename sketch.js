const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drops = [];
var person, thunder, t1, t2, t3, t4, r, sidewalkimg, sidewalk, bgimg;
function preload(){
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");
    t3 = loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");
    sidewalkimg = loadImage("sidewalk.png");
    bgimg = loadImage("bg.jpg");
}

function setup(){
   createCanvas(1000, 700);
   engine = Engine.create();
   world = engine.world;
   
   Engine.run(engine);
   
   sidewalk = createSprite(500, 400, 20, 20);
   sidewalk.addImage("r", sidewalkimg);
   sidewalk.scale = 1.3;
   person = new Umbrella(250, 300);
   r = Math.round(random(1,4));
   thunder = createSprite(random(50, 900), 100, 1, 1);
}

function draw(){
    background(bgimg);

    if(frameCount % 1 === 0){
        drops.push(new Drops(random(10, 990), 20));
    }
    
    for (var j = 0; j < drops.length; j++){
       drops[j].display(); 
    }
    person.display();
    drawSprites();
    if(frameCount % 60 === 0){
      switch(r){
         case 1:imageMode(CENTER);
               image(t1, thunder.x, thunder.y, 400, 400);
         break;
         case 2:imageMode(CENTER);
               image(t2, thunder.x, thunder.y, 400, 400);
         break;
         case 3:imageMode(CENTER);
               image(t3, thunder.x, thunder.y, 400, 400);
         break;
         case 4:imageMode(CENTER);
               image(t4, thunder.x, thunder.y, 400, 400);
         break;
      }
    }
    textSize(55);
    textFont("Century Gothic")
    fill("blue");
    text("Batman begins", 550, 600);
  } 
  

