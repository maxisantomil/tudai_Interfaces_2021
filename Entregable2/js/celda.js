"use strict";

class Celda{

    constructor(fila,column,context){
        this.widthCelda=50;
        this.heightCelda=50;
        this.fila=fila;
        this.columna=column;
        this.posX=210+this.columna*this.widthCelda;
        this.posY=90+this.fila*this.heightCelda;
        //this.ctx=context;
    }


    drawCelda(ctx){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.rect(this.posX, this.posY, this.widthCelda, this.heightCelda);
        ctx.stroke();
        ctx.closePath();
    }
}