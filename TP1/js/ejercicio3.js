"use strict";

let ctx = document.getElementById("canvas").getContext("2d");
let width = 500;
let height = 500;
let imageData = ctx.createImageData(width, height);

let r = 255;
let g = 150;
let b = 55;
let a = 255;

function drawRect(imageData, r, g, b, a) {

    for (let x = 0; x < width; x++) {
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