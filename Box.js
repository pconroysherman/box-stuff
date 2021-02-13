class Box {
constructor()
{
    var Options = {
        restitution:0.5
      }
        this.body=Bodies.rectangle (150,300,40,60,Options)
        World.add(world,this.body)

}
display(){
    rectMode(CENTER)
    rect (this.body.position.x,this.body.position.y,40,60);
    

}

}