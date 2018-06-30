namespace SeaworldCanvas2 {

    export class Fish extends MovingObjects {
        
        constructor() {
            super();    
        }
        
        setPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * 300;    
        }
        
       
        
        move(): void {
            this.x += 2;
            
            if (this.x > 360) {
                this.x = -75;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 60, this.y + 55, this.x + 65, this.y - 35, this.x, this.y + 20);
            crc2.lineTo(this.x, this.y);
            crc2.fillStyle = "rgb(160, 20, 20)";
            crc2.fill();
            crc2.closePath();
        }
    }
    
}