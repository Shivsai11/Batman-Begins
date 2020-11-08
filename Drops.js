class Drops {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'density':0.01,
          'isStatic': false
      }
  
      this.body = Bodies.circle(x, y, 5, options);
      this.image = loadImage("drop.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 15, 15)
      //fill("blue");
      //ellipse(pos.x, pos.y, 5);
      pop();
    }
  };