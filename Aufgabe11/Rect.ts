namespace Aufgabe11 {
    export class Rect extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x - 10, this.y - 20, 150, 30);
        }
    }
}