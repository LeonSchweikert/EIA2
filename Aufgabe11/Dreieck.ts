namespace Aufgabe11 {
    export class Illuminati extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 40);
            crc2.lineTo(this.x - 40, this.y - 20);
            crc2.lineTo(this.x + 40, this.y - 20);
            crc2.closePath();
            crc2.fill();
        }
        
        move(): void {
            this.x += Math.random() * 12 - 10;
            this.y += Math.random() * 11 - 10;
        }
    }
}