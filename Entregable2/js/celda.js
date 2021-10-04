"use strict";

class Celda {

    constructor(fila, column, context) {
        this.posIniX = 210;
        this.posIniY = 90;
        this.widthCelda = 50;
        this.heightCelda = 50;
        this.fila = fila;
        this.columna = column;
        this.posX = this.posIniX + this.columna * this.widthCelda;
        this.posY = this.posIniY + this.fila * this.heightCelda;
        //this.ctx=context;
    }


    drawCelda(ctx) {

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.rect(this.posX, this.posY, this.widthCelda, this.heightCelda);
        ctx.fillStyle = "brown";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        let radius = 20;
        ctx.arc(this.posX + 25, this.posY + 25, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    getPosIniXCelda() {
        return this.posIniX;
    }
    getPosIniY() {
        return this.posIniY;
    }
    getPosFinX() {
        return this.posX + this.widthCelda;
    }

}