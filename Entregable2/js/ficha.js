class Ficha {
    constructor(posX, posY, fill, context) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
    }
    isInside(x, y){};

    setFill(fill) {
        this.fill = fill;
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.getPosY;
    }
    getFill() {
        return this.fill;
    }
    draw() {
        this.context.fillStyle = this.fill;
    }
    isInside(x, y) {};
}