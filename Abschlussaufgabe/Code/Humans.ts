namespace Rageworld {


    export class Human {
        x: number;
        y: number;
       

    
        move(): void {
            this.x += 0.5;
            
            if (this.x > 400) {
                this.x = -40;
            }
        }

        draw(): void {
            
             
            //Körper
            
            ctx.beginPath();
            
            ctx.rect(this.x+7,this.y-7, 20,40)
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = "cadetblue";
            ctx.fill();
            ctx.closePath();
           
            
             //Kopf
            ctx.beginPath();
            
            
            
            ctx.arc(this.x + 17,this.y - 15, 16, 0, Math.PI * 2, true);
            ctx.closePath();
            
            
            ctx.stroke();
            ctx.fillStyle = "antiquewhite"; 
            ctx.fill();
            ctx.closePath();
            
            
            //Auge1
            ctx.beginPath();   
            
            ctx.arc(this.x + 10,this.y - 22, 2, 0, Math.PI * 2, true);
            ctx.closePath();
            
            
            ctx.stroke();
            ctx.fillStyle = "black"; 
            ctx.fill();
            ctx.closePath();
            
            //Auge2
            ctx.beginPath();   
            
            ctx.arc(this.x + 25,this.y - 22, 2, 0, Math.PI * 2, true);
            ctx.closePath();
            
            
            ctx.stroke();
            ctx.fillStyle = "black"; 
            ctx.fill();
            ctx.closePath();
            
            //Mund
            ctx.beginPath();   
            
            ctx.arc(this.x + 17.5,this.y - 9, 4, 0, Math.PI * 2, true);
            ctx.closePath();
            
            
            ctx.stroke();
            ctx.fillStyle = "transparent"; 
            ctx.fill();
            ctx.closePath();
            
            //Arm1
            
            ctx.beginPath();
            
            ctx.rect(this.x+27,this.y+3, 11,2)
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = "antiquewhite";
            ctx.fill();
            ctx.closePath();
           
             //Arm2
            
            ctx.beginPath();
            
            ctx.rect(this.x-3,this.y+3, 11,2)
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = "antiquewhite";
            ctx.fill();
            ctx.closePath();
           
            
       
            
            
            
      
      
            
   }
   }         
   }         
    