"user strict";

let mat = [];
let maxNum = 0;
let maxNumPares = 0;
let minNumImpares = 99999;
let arrPromedios = [];
let sumar = 0;
const MAXFILAS = 10;
const MAXCOLUMNAS = 10;

function dibujar_matriz() {
    for (let i = 0; i < MAXFILAS; i++) {
        mat[i] = [];
        for (let j = 0; j < MAXCOLUMNAS; j++) {
            mat[i][j] = Math.floor(Math.random() * 1000);
            sumar = sumar + mat[i][j];
            //elemento mayor de la matriz
            if (maxNum < mat[i][j]) {
                maxNum = mat[i][j];
            }
            //elemento mayor de las filas pares
            if (i % 2 == 0) {
                if (maxNumPares < mat[i][j]) {
                    maxNumPares = mat[i][j];
                }
            }
            //elemento menor de las filas impares 
            else {
                if (minNumImpares > mat[i][j]) {
                    minNumImpares = mat[i][j];
                }
            }
        }
        arrPromedios[i] = sumar / MAXCOLUMNAS;
    }
}
dibujar_matriz();
console.log(mat);
console.log("el valor maximo de la matriz es " + maxNum);
console.log("el valor maximo de las filas pares es: " + maxNumPares);
console.log("el valor minimo de las filas pares es: " + minNumImpares);
console.log("promedios por fila: " + arrPromedios);

//EJERCICIO 2 , USO DE CONTEXT DIBUJO PIRAMIDE DE RECTANGULOS
var ctx = document.getElementById("canvas").getContext("2d");
ctx.fillStyle = "#002550"; //color de fondo
ctx.fillRect(250, 25, 50, 50); //dibuja un rectangulo los dos primeros valores corresponden a eje x e y
ctx.fillStyle = "#781510";
ctx.fillRect(275, 75, 50, 50);
ctx.fillStyle = "#332233";
ctx.fillRect(225, 75, 50, 50);
ctx.fillStyle = "#33FCFF";
ctx.fillRect(200, 125, 50, 50);
ctx.fillStyle = "#624789";
ctx.fillRect(250, 125, 50, 50);
ctx.fillStyle = "#F9FF33";
ctx.fillRect(300, 125, 50, 50);

//EJERCICIO 3, pintar cuadrado de color
let ctx2 = document.getElementById("canvas2").getContext("2d");
let width = 500;
let height = 500;
let imageData1 = ctx2.createImageData(width, height);

let r1 = 255;
let g1 = 150;
let b1 = 55;
let a1 = 255;

function drawRect2(imageData1, r, g, b, a) {

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            setPixel2(imageData1, x, y, r, g, b, a);
        }
    }
}

function setPixel2(imageData1, x, y, r, g, b, a) {
    let index = (x + y * imageData1.width) * 4;
    imageData1.data[index + 0] = r;
    imageData1.data[index + 1] = g;
    imageData1.data[index + 2] = b;
    imageData1.data[index + 3] = a;
}

drawRect2(imageData1, r1, g1, b1, a1);
ctx2.putImageData(imageData1, 0, 0);


//EJERCICIO 4

let ctx3 = document.getElementById("canvas3").getContext("2d");
let imageData2 = ctx3.createImageData(width, height);

let r2 = 0;
let g2 = 0;
let b2 = 0;
let a2 = 255;

function drawRect(imageData2, r, g, b, a) {

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let coeficiente = 255 / height;
            let r = coeficiente * y;
            let g = coeficiente * y;
            let b = coeficiente * y;
            let a = 255;
            setPixel(imageData2, x, y, r, g, b, a);
        }
    }
}

function setPixel(imageData2, x, y, r, g, b, a) {
    let index = (x + y * imageData2.width) * 4;
    imageData2.data[index + 0] = r;
    imageData2.data[index + 1] = g;
    imageData2.data[index + 2] = b;
    imageData2.data[index + 3] = a;
}

drawRect(imageData2, r2, g2, b2, a2);
ctx3.putImageData(imageData2, 0, 0);

//EJERCICIO 5 

let cg = document.getElementById("canvas4")
let ctx4 = cg.getContext("2d");
let imageData4 = ctx4.createImageData(cg.width, cg.height);

let r4 = 0;
let g4 = 0;
let b4 = 0;
let a4 = 255;

function drawRect4(imageData, r, g, b, a) {
    let h = 0;
    let coeficiente2 = 0;
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
            r = 255;
            g = 255 - (coeficiente2 * h);
            b = 0;
            h = h + 1;
            coeficiente2 = 1;
        }
        for (let y = 0; y < height; y++) {
            setPixel4(imageData, x, y, r, g, b, a);
        }
    }
}

function setPixel4(imageData, x, y, r, g, b, a) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

drawRect4(imageData4, r4, g4, b4, a4);
ctx4.putImageData(imageData4, 0, 0);

// EJERCICIO 7 


let ctx5 = document.getElementById("canvas5").getContext("2d");
let image1 = new Image();
image1.src = "img/1.png";

image1.onload = function() {
    myDrawImageMethod(this);
}

function myDrawImageMethod(image) {
    ctx5.drawImage(image, 150, 150);
}

function metodoA() {
    let data = ctx5.getImageData(0, 0, width, height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];
        let valorFinal = (rojo + verde + azul) / 3;

        data.data[index * 4] = valorFinal;
        data.data[index * 4 + 1] = valorFinal;
        data.data[index * 4 + 2] = valorFinal;

    }
    ctx5.putImageData(data, 0, 0);
}

function metodoB() {
    let data = ctx5.getImageData(0, 0, width, height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];

        data.data[index * 4] = rojo;
        data.data[index * 4 + 1] = rojo;
        data.data[index * 4 + 2] = rojo;
    }
    ctx5.putImageData(data, 0, 0);
}