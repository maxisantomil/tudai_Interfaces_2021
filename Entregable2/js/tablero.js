"use strict";

class Tablero{
constructor(columnas,filas){
   this.filas=filas;
   this.columnas=columnas;
   //this.ctx=context;
   this.celdas=[];
   this.cantCeldas=0; 
}

agregarCelda(){
    for(let fila=0;fila<this.filas;fila++){
        for(let column=0;column<this.columnas;column++){
            let celda=new Celda(fila,column,ctx);//creación similar a fichaCircular
            this.celdas.push(celda);
        }
    }
    console.log(this.celdas);
}

draw(ctx){
    for(let i=0;i<this.celdas.length;i++){
        this.celdas[i].drawCelda(ctx);
    }
}

buscarUbicacionCelda(ficha){
    let ubicacion=0;
    for(let i=0;i<this.celdas.length/this.columnas;i++){
        if( this.celdas[i].getPosIniXCelda()<=ficha.getPosX() &&this.celdas[i].getFinPosX()>ficha.getPosX()){
             return this.celdas[i].getUbicacionMediaCelda();
        }
        else ubicacion=null;
    }
    return ubicacion;
}

getPosIniX(){
    return this.celdas[0].getPosIniXCelda();
}

getPosFinX(){
    let comienzoWidth = this.getPosIniX();
    let ancho=0;
    for(let i=0;i<this.celdas.length/this.columnas;i++){
         ancho+=this.celdas[i].getWidthCelda();
    };
    return comienzoWidth+ancho;
}
getZonaTiro(){
    return this.celdas[0].getZonaTiroCelda();
}


}