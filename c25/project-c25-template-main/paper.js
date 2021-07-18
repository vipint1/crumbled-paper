class Paper
{
constructor(x,y){
    this.x =x
    this.y =y
    var options={
     
    ' restitution':0.5,
    'density':8.4,
    'friction':0
    }
    this.body = Bodies.circle(x,y,10,options)
    this.radius = 10;
    this.image=loadImage("paper.png")
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,35,35);
    pop();
}
}
