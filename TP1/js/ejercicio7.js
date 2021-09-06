"use strict";

let ctx = document.getElementById("canvas").getContext("2d");
let width = 500;
let height = 500;
//let imageData = ctx.createImageData(width, height);

let image1 = new Image();
image1.src = "img/1.png";

image1.onload = function() {
    myDrawImageMethod(this);
}

function myDrawImageMethod(image) {
    ctx.drawImage(image, 150, 150);
}

function metodoA() {
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

function metodoB() {
    let data = ctx.getImageData(0, 0, width, height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];

        data.data[index * 4] = rojo;
        data.data[index * 4 + 1] = rojo;
        data.data[index * 4 + 2] = rojo;
    }
    ctx.putImageData(data, 0, 0);
}