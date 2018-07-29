namespace Rageworld {


    export class Bombs {

        x: number;
        y: number;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;

        }



        move(): void {
            this.y += 1;



        }

        draw(): void {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = "blue";
            ctx.fill();
        }
    }

}