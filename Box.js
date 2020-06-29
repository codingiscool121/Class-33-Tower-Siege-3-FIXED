class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0,
       // 'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 10;
    World.add(world, this.body);
  }

  score(){
    if (this.visiblity < 0 && this.visiblity >= 100){
      score++;
    }
  }

  // score(){
  //   if (x<650 || y<40){
  //     score++;
  //   }
  // }


  display(){
  if(this.body.speed<3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("lightblue");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
    }
    
   

   
  
  

  
  }
  }
