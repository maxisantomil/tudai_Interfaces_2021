class fichaCircular extends Ficha {
    constructor(posX, posY, fill, context) {
        super(posX, posY, fill, context);

        this.radius = 20;
    }

    draw() {
        super.draw();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
    }

    getRadius() {
        return this.radius;
    }

    isInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }

}