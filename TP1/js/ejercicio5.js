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
        let r;
        let g;
        let b;
        let a = 255;
        if (x <= width / 2) {
            let coeficiente = 255 / (width / 2);
            r = coeficiente * x;
            g = coeficiente * x;
            b = 0;
        } else {
            let coeficiente = 255 / (width);
            r = 255;
            g = 255 - (coeficiente * x);
            b = 0;
        }
        for (let y = 0; y < height; y++) {
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