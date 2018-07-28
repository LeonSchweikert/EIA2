namespace Attack {
    
export class carClass extends MovingObjects{
    

    constructor (_x: number, _y:number) {
            super(_x, _y);
            }
    
    
    draw() : void {
        //Auto Body
        ctx.fillStyle = "#FF0000";
        
        ctx.beginPath();
        ctx.rect(this.x, this.y, 85, 25);
        ctx.rect(this.x+15, this.y-20, 60, 20);
        ctx.closePath();
        
        ctx.stroke();
        ctx.fill();
        
        //Auto Scheibe
        ctx.fillStyle = "#F2F2F2";
        ctx.beginPath();
        ctx.rect(this.x+25, this.y-15, 50, 15);
        ctx.closePath();
        
        ctx.fill();
        
        //Autoreifen
        ctx.fillStyle = "#000000";
        
        ctx.beginPath();
        ctx.arc(this.x+20, this.y+25, 10, 0, 2*Math.PI);
        ctx.arc(this.x+65, this.y+25, 10, 0, 2*Math.PI);
        ctx.closePath();
        
        ctx.fill();      
    }
    
    
    move() : void{
        this.x += 2;
        this.y -= 0;
        
        if (this.x > 830) {
            this.x = -100;
        }
    }

    



} //Close carClass


} //Close Namespace