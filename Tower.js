class Tower{
    constructor(x,y,width,height)//creating the tower
    {
        var tower_options={
            isStatic: true
        }
        this.body= Bodies.rectangle(x,y,width,height,tower_options);
        World.add(world,this.body);
        this.image= loadImage("assets/tower.png");
        this.w = width;
        this.h = height;
    }
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
       
    }
}