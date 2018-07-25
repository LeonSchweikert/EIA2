namespace Rageworld {

 

    export class Fish {
        x: number;
        y: number;
       

    
        move(): void {
            this.x += 1;
            
            if (this.x > 360) {
                this.x = -40;
            }
        }

        draw(): void {
            
            
             //Kuppel
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            
            ctx.moveTo(this.x+ 20, this.y- 10);
            ctx.arc(this.x + 17,this.y - 20, 10, 0, Math.PI * 2, true);
            ctx.closePath();
            
            
            ctx.stroke();
            ctx.fillStyle = "transparent"; 
            ctx.fill();
            ctx.closePath();
            
            
            //Unterteil
            ctx.beginPath();
           
            
            
            ctx.arc(this.x + 17,this.y -5, 10, 0, Math.PI * 2, true);
            ctx.closePath();
            
            
            ctx.stroke();
            ctx.fillStyle = "black"; 
            ctx.fill();
            ctx.closePath();
            
            
            
            //Hauptteil
           ctx.beginPath();
           ctx.arc(this.x + 17,this.y + 1, 22, 0, Math.PI * 1, true);
           ctx.closePath();
            
            ctx.stroke();
            ctx.fillStyle = "grey"; 
            ctx.fill();
            ctx.closePath();
            
            
        
            
        }
    }
 } 
      


       
     