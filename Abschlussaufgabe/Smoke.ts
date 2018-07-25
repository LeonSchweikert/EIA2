namespace Rageworld {

 export class Bubbles {
     
        x: number;
        y: number;
        r: number;


        move(): void {
            this.y -= 1;

            if (this.y < 0) {
                this.y = 270;
            }

        }

        draw(): void {

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = "#b4b4b4";
            ctx.fill();

        }
    }

}