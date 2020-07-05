class Drops {
    constructor(x,y) {
      var options = {
          restitution:0.3,
          friction:0.1,
          density:1.2
      }
      this.radius= 5;
      this.body = Bodies.circle(x,y, this.radius, options);
     // this.color= color(random(0, 255), random(0, 255), random(0, 255));
      //this.image = loadImage("Images/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.radius, this.radius);
      pop();
     //circle(pos.x, pos.y, this.radius);
    }
  };