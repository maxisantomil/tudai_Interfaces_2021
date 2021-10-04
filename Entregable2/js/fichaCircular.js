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
    drawCaida(ficha) {
        while(ficha.posY<=365){
            clearCanvas();
            super.draw();
            this.context.beginPath();
            this.context.arc(ficha.posX, ficha.posY+=1, ficha.radius, 0, 2 * Math.PI);
            this.context.stroke();
            this.context.fill();
        }
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