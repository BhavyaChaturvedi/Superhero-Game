class Hero {
    constructor(x, y, r) {
      var options = { 
        'density': 1, 
        'friction': 0.005};
  
      this.body = Bodies.circle(x, y, r/2, options);
      this.x = x;
      this.y = y;
      this.r = r/2;
      this.image = loadImage("image/Superhero-01.png")

      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  }