class Paper{
    constructor(){
        var opt={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0

        }
        this.body=Bodies.circle(100,30,30,opt)
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("white");

        ellipse(pos.x,pos.y,30)
        pop(
        )

    }
}

