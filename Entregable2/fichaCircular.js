class fichaCircular extends Ficha {
    constructor(posX, posY, fill, context) {
        super(posX, posY, fill, context);

        this.radius = 20;
    }

    draw() {
        super.draw();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    getRadius() {
        return this.radius;
    }
}