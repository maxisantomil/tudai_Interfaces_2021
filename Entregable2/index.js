"user strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let lastClickedFicha = null;
let isMouseDown = false;

let arrFichas = [];
<<<<<<< HEAD
=======
let tablero = new Tablero(0, 0, ctx, 90, 50);
>>>>>>> c9c8dbdff3c54fd40c3eb6d3e0b87cecd794d621
for (let i = 0; i < 10; i++) {
    let fichas_j1 = new fichaCircular(50, 50 + i * 50, 'red', ctx);
    arrFichas.push(fichas_j1);
    fichas_j1.draw();
<<<<<<< HEAD
=======

>>>>>>> c9c8dbdff3c54fd40c3eb6d3e0b87cecd794d621
}

for (let i = 0; i < 10; i++) {
    let fichas_j2 = new fichaCircular(850, 50 + i * 50, 'blue', ctx);
    arrFichas.push(fichas_j2);
    fichas_j2.draw();
}

<<<<<<< HEAD
function drawFicha(){
    clearCanvas();
    for(let i=0;i<arrFichas.length;i++){
        arrFichas[i].draw();
    }
}

function clearCanvas(){
    ctx.fillStyle="#F8F8FF";
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
}

function findClickFicha(x,y){
    for(let i=0;i<arrFichas.length;i++){
        const element = arrFichas[i];
        if(element.isInside(x,y)){
            return element;
        }
    }
}

function onMouseDown(e){
    isMouseDown = true;

    if(lastClickedFicha != null){
        lastClickedFicha=null;
    }

    let clickFic = findClickFicha(e.layerX, e.layerY);
    if(clickFic != null){
        lastClickedFicha = clickFic;
=======
function onMouseDown(e) {
    isMouseDown = true;

    if (lastClickedFicha != null) {
        lastClickedFicha = null;
    }

    let clickFicha = findClickFicha(e.layerX, e.layerY);
    if (clickFicha != null) {
        lastClickedFicha = clickFicha;
>>>>>>> c9c8dbdff3c54fd40c3eb6d3e0b87cecd794d621
    }
    drawFicha();
}

<<<<<<< HEAD
function onMouseMove(e){
    if(isMouseDown && lastClickedFicha != null){
=======
function onMouseMove(e) {
    if (isMouseDown && lastClickedFicha != null) {
>>>>>>> c9c8dbdff3c54fd40c3eb6d3e0b87cecd794d621
        lastClickedFicha.setPosition(e.layerX, e.layerY);
        drawFicha();
    }
}

<<<<<<< HEAD
function onMouseUp(e){
    isMouseDown=false;
}


let canvasLimites=canvas.getBoundingClientRect();
canvas.addEventListener('mousedown',onMouseDown, false);
canvas.addEventListener('mouseup',onMouseUp,false);
canvas.addEventListener('mousemove',onMouseMove,false);
canvas.style.cursor="hand";
=======
function onMouseUp(e) {
    isMouseDown = false;
}

function clearCanvas() {
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawFicha() {
    clearCanvas();
    for (let i = 0; i < arrFichas.length; i++) {
        arrFichas[i].draw();
    }
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
>>>>>>> c9c8dbdff3c54fd40c3eb6d3e0b87cecd794d621
