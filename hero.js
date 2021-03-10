class hero{
    constructor(x,y,width,height){
        var opions={
            restitution:0.8,
            friction:1,
            density:0.5

        }

        this.body=Bodies.rectangle(x,y,width,height,opions)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.width,this.height)
        pop()
    }
}