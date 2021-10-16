"user strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let lastClickedFicha = null;
let isMouseDown = false;

let arrFichas = [];
let tablero = new Tablero(6, 6);
tablero.agregarCelda();
tablero.draw(ctx);

for (let i = 0; i < 10; i++) {
    let fichas_j1 = new fichaCircular(50, 50 + i * 50, 'red', ctx);
    arrFichas.push(fichas_j1);
    fichas_j1.draw();
}

for (let i = 0; i < 10; i++) {
    let fichas_j2 = new fichaCircular(850, 50 + i * 50, 'blue', ctx);
    arrFichas.push(fichas_j2);
    fichas_j2.draw();
}

function onMouseDown(e) {
    isMouseDown = true;

    if (lastClickedFicha != null) {
        lastClickedFicha = null;
    }

    let clickFicha = findClickFicha(e.layerX, e.layerY);
    if (clickFicha != null) {
        lastClickedFicha = clickFicha;
    }
    //drawFicha();
}

function retornarPosicionFicha(e){
    let ClientRect = this.canvas.getBoundingClientRect();
    
     return { 
       x: Math.round(e.clientX - ClientRect.left),
       y: Math.round(e.clientY - ClientRect.top)
     }
} 

function verificarPosFichaDentroTablero(e){
    let pos = retornarPosicionFicha(e);
    let limiteSupTablero = tablero.getZonaTiro()-20;
    
    
    if(pos.x>tablero.getPosIniX() && pos.x<tablero.getPosFinX()&&pos.y<limiteSupTablero){
        return true;
    }
    else return false;
}

function onMouseMove(e) {
    if (isMouseDown && lastClickedFicha != null) {
        lastClickedFicha.setPosition(e.layerX, e.layerY);
        drawFicha();
    }
}

function onMouseUp(e) {
    if(verificarPosFichaDentroTablero(e)){
    let clickFicha = findClickFicha(e.layerX, e.layerY);
    if (clickFicha != null) {
        lastClickedFicha = clickFicha;
    }
    let posXCeldaCentral=tablero.buscarUbicacionCelda(clickFicha);
    console.log(posXCeldaCentral);
    if(posXCeldaCentral!=null){
    drawFichaCaida(clickFicha,posXCeldaCentral,tablero);
    isMouseDown = false;
    }
}
}

function clearCanvas() {
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawFicha() {
    clearCanvas();
    tablero.draw(ctx);
    for (let i = 0; i < arrFichas.length; i++) {
        arrFichas[i].draw();
    }
}


function drawFichaCaida(ficha,pos,tab) {
    clearCanvas();
    tablero.draw(ctx);
    //for (let i = 0; i < arrFichas.length; i++) {
       /* arrFichas[i].*/ficha.drawCaida(ficha,pos,tab);
    //    }
}

function findClickFicha(x, y) {
    for (let i = 0; i < arrFichas.length; i++) {
        const element = arrFichas[i];
        if (element.isInside(x, y)) {
            return element;
        }
    }
}

let canvasLimites = canvas.getBoundingClientRect();
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);