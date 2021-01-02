class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.body = Bodies.circle(this.x, this.y, this.w, this.h, options);
        World.add(world, this.body);
        
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("black");
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}