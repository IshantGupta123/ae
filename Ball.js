class Ball{
    constructor(x,y,width,height){
        var options={
            'density':1,
            'friction':5,
            'restitution':0.3
        }

            this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;

        World.add(world,this.body)
        }
            display(){
        var pos=this.body.position
        ellipseMode(CENTER)
        fill("blue")
        Matter.Bodies.circle(20, 20, 20) 
       } 
        
    }
