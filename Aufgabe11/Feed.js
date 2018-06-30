var SeaworldCanvas2;
(function (SeaworldCanvas2) {
    class Food extends SeaworldCanvas2.MovingObjects {
        constructor() {
            super();
            this.border = Math.random() * (640 - 500) + 500;
        }
        move() {
            this.y += 1;
            if (this.y > this.border) {
                this.y = this.border;
            }
        }
        draw() {
            SeaworldCanvas2.crc2.beginPath();
            SeaworldCanvas2.crc2.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            SeaworldCanvas2.crc2.closePath();
            SeaworldCanvas2.crc2.fillStyle = "rgb(80, 20, 20)";
            SeaworldCanvas2.crc2.fill();
        }
    }
    SeaworldCanvas2.Food = Food;
})(SeaworldCanvas2 || (SeaworldCanvas2 = {}));
//# sourceMappingURL=Feed.js.map