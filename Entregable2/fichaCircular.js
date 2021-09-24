class fichaCircular extends Ficha {
    constructor(posX, posY, fill, context) {
        super(posX, posY, fill, context);

        this.radius = 20;
    }

    draw() {
        super.draw();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        let image1 = new Image(); //iniciar ruta
        image1.src = 'img/poker.png'; //nuevo objeto imagen
        image1.onload = () => { //la imagen debe cargarse
            let relleno = this.context.createPattern(image1, "repeat"); //método createPattern
            this.context.fillStyle = relleno; //imagen como relleno
            this.context.fill();
        }
        this.context.fill();
        this.context.closePath();
    }

    getRadius() {
        return this.radius;
    }

    fillImage() {

    }
}