class paper {
    constructor(x, y, r){
        var options={
            restituition:0.3,
            isStatic: false,
            density: 1.2,
            friction: 0.5          
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r
        this.image= loadImage("paper.jpg")
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //imageMode(CENTER);
        fill("purple");
        ellipse(0, 0, this.width, this.height);
        //image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}