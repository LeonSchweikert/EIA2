var Aufgabe11;
(function (Aufgabe11) {
    class Illuminati extends Aufgabe11.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y + 40);
            Aufgabe11.crc2.lineTo(this.x - 40, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x + 40, this.y - 20);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
        }
        move() {
            this.x += Math.random() * 12 - 10;
            this.y += Math.random() * 11 - 10;
        }
    }
    Aufgabe11.Illuminati = Illuminati;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Dreieck.js.map