var Attack;
(function (Attack) {
    class carClass extends Attack.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            //Auto Body
            Attack.ctx.fillStyle = "#FF0000";
            Attack.ctx.beginPath();
            Attack.ctx.rect(this.x, this.y, 85, 25);
            Attack.ctx.rect(this.x + 15, this.y - 20, 60, 20);
            Attack.ctx.closePath();
            Attack.ctx.stroke();
            Attack.ctx.fill();
            //Auto Scheibe
            Attack.ctx.fillStyle = "#F2F2F2";
            Attack.ctx.beginPath();
            Attack.ctx.rect(this.x + 25, this.y - 15, 50, 15);
            Attack.ctx.closePath();
            Attack.ctx.fill();
            //Autoreifen
            Attack.ctx.fillStyle = "#000000";
            Attack.ctx.beginPath();
            Attack.ctx.arc(this.x + 20, this.y + 25, 10, 0, 2 * Math.PI);
            Attack.ctx.arc(this.x + 65, this.y + 25, 10, 0, 2 * Math.PI);
            Attack.ctx.closePath();
            Attack.ctx.fill();
        }
        move() {
            this.x += 2;
            this.y -= 0;
            if (this.x > 830) {
                this.x = -100;
            }
        }
    }
    Attack.carClass = carClass; //Close carClass
})(Attack || (Attack = {})); //Close Namespace
//# sourceMappingURL=menschen.js.map