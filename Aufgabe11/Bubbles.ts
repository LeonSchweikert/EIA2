namespace SeaworldCanvas2 {

    export class Bubbles extends MovingObjects {
        radius: number;

        constructor() {
            super();    
        }
        
        setPosition(): void {
            this.x = Math.random() * (220 - 200) + 300;
            this.y = Math.random() * 180;    
        }
        
      

        move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 200;
            }

        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.strokeStyle = "rgb(0, 0, 0)";
            crc2.stroke();

        }
    }

}