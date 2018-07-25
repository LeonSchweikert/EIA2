var Rageworld;
(function (Rageworld) {
    class Human {
        move() {
            this.x += 0.5;
            if (this.x > 400) {
                this.x = -40;
            }
        }
        draw() {
            //K�rper
            Rageworld.ctx.beginPath();
            Rageworld.ctx.rect(this.x + 7, this.y - 7, 20, 40);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "cadetblue";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
            //Kopf
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x + 17, this.y - 15, 16, 0, Math.PI * 2, true);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "antiquewhite";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
            //Auge1
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x + 10, this.y - 22, 2, 0, Math.PI * 2, true);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "black";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
            //Auge2
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x + 25, this.y - 22, 2, 0, Math.PI * 2, true);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "black";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
            //Mund
            Rageworld.ctx.beginPath();
            Rageworld.ctx.arc(this.x + 17.5, this.y - 9, 4, 0, Math.PI * 2, true);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "transparent";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
            //Arm1
            Rageworld.ctx.beginPath();
            Rageworld.ctx.rect(this.x + 27, this.y + 3, 11, 2);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "antiquewhite";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
            //Arm2
            Rageworld.ctx.beginPath();
            Rageworld.ctx.rect(this.x - 3, this.y + 3, 11, 2);
            Rageworld.ctx.closePath();
            Rageworld.ctx.stroke();
            Rageworld.ctx.fillStyle = "antiquewhite";
            Rageworld.ctx.fill();
            Rageworld.ctx.closePath();
        }
    }
    Rageworld.Human = Human;
})(Rageworld || (Rageworld = {}));
//# sourceMappingURL=Humans.js.map