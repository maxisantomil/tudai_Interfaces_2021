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

    /*clearCirculo(){
        this.context.globalCompositeOperation = 'destination-out';
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();
    }*/
    drawCaida(ficha, posXCeldaCentral, tablero) {
        while (ficha.posY <= 364) {
            ficha.clearCanvasTablero();
            tablero.draw(this.context);
            super.draw();
            this.context.beginPath();
            this.context.arc(posXCeldaCentral, ficha.posY += 1, ficha.radius, 0, 2 * Math.PI);

        }
        this.context.stroke();
        this.context.fill();
    }
    clearCanvasTablero() {
        ctx.fillStyle = '#F8F8FF';
        ctx.fillRect(210, 0, 300, 300);
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