class Cannon1{
    constructor(x,y,width,height)
    {
       this.x = x;
       this.y = y;
        this.w = width;
        this.h = height;
    }
    display(){
        
        fill("darkgrey")
        push();
        translate(this.x,this.y);
        rotate(this.angle)
        rect(-10,-20,this.w,this.h);
        pop();
        arc(this.x-36,this.y+90,140,220,PI,TWO_PI);
        noFill();
        
    }
}