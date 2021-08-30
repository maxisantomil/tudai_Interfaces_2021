"use strict";

let ctx = document.getElementById("canvas").getContext("2d");
let width = 500;
let height = 500;
let imageData = ctx.createImageData(width, height);

let r = 0;
let g = 0;
let b = 0;
let a = 255;

function drawRect(imageData, r, g, b, a) {

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let coeficiente = 255 / width;
            let r = coeficiente * y;
            let g = coeficiente * y;
            let b = coeficiente * y;
            let a = 255;
            setPixel(imageData, x, y, r, g, b, a);
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);