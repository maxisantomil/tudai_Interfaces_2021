"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rect = canvas.getBoundingClientRect(); //donde esta el canvas con respecto a la pantalla
let width = 500;
let height = 500;
let x = 0,
    y = 0,
    dibujando = false,
    color = 'black',
    grosor = 1; //variables globales

let image = new Image();
image.src = "img/sasuke.jpg";

image.onload = function() {
    myDrawImageMethod(this);
}

function myDrawImageMethod(imagen) {
    ctx.drawImage(imagen, 0, 0, width, height);
}

function Grises() {
    let data = ctx.getImageData(0, 0, width, height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];
        let valorFinal = (rojo + verde + azul) / 3;

        data.data[index * 4] = valorFinal;
        data.data[index * 4 + 1] = valorFinal;
        data.data[index * 4 + 2] = valorFinal;

    }
    ctx.putImageData(data, 0, 0);
}

function Binario() {
    let data = ctx.getImageData(0, 0, width, height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];
        let promedioFijo = 255 / 3;
        let promediorgb = (rojo + verde + azul) / 5;
        // ya que el promedio de los colores mas oscuros es menor
        // dividiendo por un numero mas alto, 
        //se aumenta el umbral de colores menos claros para que se destaquen en negro.
        if (promediorgb < promedioFijo) {
            data.data[index * 4] = 0;
            data.data[index * 4 + 1] = 0;
            data.data[index * 4 + 2] = 0;
        } else {
            data.data[index * 4] = 255;
            data.data[index * 4 + 1] = 255;
            data.data[index * 4 + 2] = 255;
        }
    }
    ctx.putImageData(data, 0, 0);
}

function Negativo() {
    let data = ctx.getImageData(0, 0, width, height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];

        data.data[index * 4] = 255 - rojo;
        data.data[index * 4 + 1] = 255 - verde;
        data.data[index * 4 + 2] = 255 - azul;
    }
    ctx.putImageData(data, 0, 0);
}

function Sepia() {
    let data = ctx.getImageData(0, 0, width, height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];

        let sr = (rojo * 0.393) + (verde * 0.769) + (azul * 0.189);
        if (sr > 255)
            sr = 255;
        let sv = (rojo * 0.349) + (verde * 0.686) + (azul * 0.168);
        if (sv > 255)
            sv = 255;
        let sa = (rojo * 0.272) + (verde * 0.534) + (azul * 0.131);
        if (sa > 255)
            sa = 255;

        data.data[index * 4] = sr;
        data.data[index * 4 + 1] = sv;
        data.data[index * 4 + 2] = sa;
    }
    ctx.putImageData(data, 0, 0);
}

function Brillo() {
    let data = ctx.getImageData(0, 0, width, height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];

        rojo = rojo + 70;
        verde = verde + 70;
        azul = azul + 70;

        if (rojo > 255) data.data[index * 4] = 255;
        if (verde > 255) data.data[index * 4 + 1] = 255;
        if (azul > 255) data.data[index * 4 + 2] = 255;
    }
    ctx.putImageData(data, 0, 0);
}

// PAINT LAPIZ Y GOMA DE BORRAR
function definir_color(c) {
    color = c;
    grosor = 1;
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

function setBorrado() {
    color = "#FFFFFF";
    grosor = 20;
}