var SeaworldCanvas2;
(function (SeaworldCanvas2) {
    class Bubbles extends SeaworldCanvas2.MovingObjects {
        constructor() {
            super();
        }
        setPosition() {
            this.x = Math.random() * (220 - 200) + 200;
            this.y = Math.random() * 180;
        }
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 200;
            }
        }
        draw() {
            SeaworldCanvas2.crc2.beginPath();
            SeaworldCanvas2.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            SeaworldCanvas2.crc2.closePath();
            SeaworldCanvas2.crc2.strokeStyle = "rgb(0, 0, 0)";
            SeaworldCanvas2.crc2.stroke();
        }
    }
    SeaworldCanvas2.Bubbles = Bubbles;
})(SeaworldCanvas2 || (SeaworldCanvas2 = {}));
//# sourceMappingURL=Bubbles.js.map