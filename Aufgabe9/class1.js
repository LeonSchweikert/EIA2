var Rageworld;
(function (Rageworld) {
    class Bubbles {
        move() {
            this.y -= 1;
            if (this.y < 0) {
                this.y = 200;
            }
        }
        draw() {
            Rageworld.crc2.beginPath();
            Rageworld.crc2.arc(this.x, this.y, this.r, 0, 3 * Math.PI);
            Rageworld.crc2.closePath();
            Rageworld.crc2.strokeStyle = "rgb(0, 0, 0)";
            Rageworld.crc2.stroke();
        }
    }
    Rageworld.Bubbles = Bubbles;
})(Rageworld || (Rageworld = {}));
//# sourceMappingURL=class1.js.map