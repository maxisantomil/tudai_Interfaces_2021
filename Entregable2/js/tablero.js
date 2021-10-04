"use strict";

class Tablero {
    constructor(columnas, filas) {
        this.filas = filas;
        this.columnas = columnas;
        //this.ctx=context;
        this.celdas = [];
        this.cantCeldas = 0;
    }

    agregarCelda() {
        for (let fila = 0; fila < this.filas; fila++) {
            for (let column = 0; column < this.columnas; column++) {
                let celda = new Celda(fila, column, ctx); //creación similar a fichaCircular
                this.celdas.push(celda);
            }
        }
        console.log(this.celdas);
    }

    draw(ctx) {
        for (let i = 0; i < this.celdas.length; i++) {
            this.celdas[i].drawCelda(ctx);
        }
    }

    getPosIniX() {
        return this.celdas[0].getPosIniXCelda();
    }

    getPosFinX() {
        let suma = 0;
        for (let i = 0; i < this.filas; i++) {
            suma += this.celdas[i].widthCelda;
        }
        console.log(suma + this.getPosIniX());
        return suma + this.getPosIniX();
    }


}