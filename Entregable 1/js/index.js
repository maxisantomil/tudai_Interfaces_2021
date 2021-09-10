"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rect = canvas.getBoundingClientRect(); //donde esta el canvas con respecto a la pantalla
let width=500;
let height=500;
let x = 0,
    y = 0,
    dibujando = false,
    color = 'black',
    grosor = 1; //variables globales

    let image = new Image();
    image.src="img/Quilmes470.jpg";
    
    image.onload = function (){
        myDrawImageMethod(this);
        
    }

    function myDrawImageMethod(imagen){
        ctx.drawImage(imagen, 0, 0);
        gris(imagen);
    }

    function gris(imageData){
       //let imageData = ctx.getImageData(0,0,width,height);
       function drawRect(imageData,r,g,b,a){
           for(let x=0;x<width;x++){
               for(let y=0;y<height;y++){
                   setPixel(imageData,x,y,r,g,b,a);
               }
           }
       }
    }

    function setPixel(imageData,r,g,b,a){
        let i=(x+yimageData.width*4);

        r=imageData.data[index];
        g=imageData.data[index+1];
        b=imageData.data[index+2];
        a=imageData.data[index+3];

        let promedio = Math.round((r+g+b)/3);

        imageData.data[index]=promedio;
        imageData.data[index+1]=promedio;
        imageData.data[index+2]=promedio;


    }




function definir_color(c) {
    color = c;
}
// cuando se hace click por primera vez dentro del canvas
canvas.addEventListener('mousedown', function(e) {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    dibujando = true;
});

canvas.addEventListener('mousemove', function(e) {
    if (dibujando === true) {
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
});

canvas.addEventListener('mouseup', function(e) {
    if (dibujando === true) {
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        dibujando = false;
    }
});

function dibujar(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}