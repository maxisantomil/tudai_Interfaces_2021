class fichaCircular extends Ficha {
    constructor(posX, posY, fill, context) {
        super(posX, posY, fill, context);

        this.radius = 20;
    }

    draw(image) {
        super.draw();
        this.context.beginPath();
        this.setFill(image);
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
    }

    getRadius() {
        return this.radius;
    }

    isInside(x, y) {
        return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) < this.r;
    }
    setFill(image) {
        let image1 = new Image(); //iniciar ruta
        image1.src = image; //nuevo objeto imagen
        image1.onload = () => {
            this.context.fillStyle = this.context.createPattern(image1, "repeat"); //imagen como relleno
        }
    }
}