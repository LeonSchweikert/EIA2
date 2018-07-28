namespace Rageworld {


    export class Bombs {
       
        x: number;
        y: number;
        border: number;

        

        move(): void {
            this.y += 1;
            
            if (this.y > this.border) {
                this.y = this.border;    
            }

        }

        draw(): void {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();
        }
    }

}