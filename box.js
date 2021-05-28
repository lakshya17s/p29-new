class Box{
    constructor(x,y,w,h){
        var options = {
            restitution:0.8,
            friction:1,
            density:0.5,
        }
        this.box = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.box);
        this.w = w;
        this.h = h;
    }
    
    display(){
       var pos = this.box.position;
       var angle = this.box.angle;
       push()
       translate(pos.x,pos.y);
       angleMode(RADIANS);
       rotate(angle);
       rectMode(CENTER);
       fill("#1A05F3")
       rect(0,0,this.w,this.h);
pop();
    }
}