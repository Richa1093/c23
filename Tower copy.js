class Ground{
    constructor(x,y,width,height)
    {
        var ground_options={
            isStatic: true
        }
        this.body= Bodies.rectangle(x,y,width,height,ground_options);
        World.add(world,this.body);
        //this.image= loadImage("assets/tower.png");
        this.w = width;
        this.h = height;
    }
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
        
    }
}