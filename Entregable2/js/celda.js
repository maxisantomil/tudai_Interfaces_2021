"use strict";

class Celda {

    constructor(fila, column, context) {
        this.widthCelda = 50;
        this.heightCelda = 50;
        this.fila = fila;
        this.columna = column;
        this.posX = 210 + this.columna * this.widthCelda;
        this.posY = 90 + this.fila * this.heightCelda;
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

}