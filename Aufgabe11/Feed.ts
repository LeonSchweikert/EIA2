namespace SeaworldCanvas2 {

    export class Food extends MovingObjects {

        border: number;

        constructor() {
            super();
            this.border = Math.random() * (640 - 500) + 500;
        }

   
        move(): void {
            this.y += 1;
            
            if (this.y > this.border) {
                this.y = this.border;    
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(80, 20, 20)";
            crc2.fill();
        }
    }

}