class Umbrella {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':0.01,
          'isStatic': true
      }
  
      this.body = Bodies.circle(x, y, 200, options);
      this.image = loadImage("images/Walking Frame/walking_1.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 350, 500);
      //fill("blue");
      //ellipse(pos.x, pos.y, 5);
      pop();
    }
  };