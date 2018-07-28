var Rageworld;
(function (Rageworld) {
    class Bombs {
        move() {
            this.y += 1;
            if (this.y > this.border) {
                this.y = this.border;
            }
        }
        draw() {
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            Rageworld.ctx.closePath();
            Rageworld.ctx.fillStyle = "red";
            Rageworld.ctx.fill();
        }
    }
    Rageworld.Bombs = Bombs;
})(Rageworld || (Rageworld = {}));
//# sourceMappingURL=Bombs.js.map