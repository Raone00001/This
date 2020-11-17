class BaseClass {
    constructor(x, y, radius) {
      var paper_options = {
          
        'isStatic':false,
        'restitution':1,
        'friction':0,
        'density':1,
        'frictionAir': 0.0,
        'slop': 1,
        'inertia': Infinity

      }

      this.body = Bodies.circle(x, y, radius, paper_options);
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("white");
      fill("black");
      ellipseMode(RADIUS);
      ellipse(0, 0, 25, 25);
      pop();
                                                                                
    }
  }
  