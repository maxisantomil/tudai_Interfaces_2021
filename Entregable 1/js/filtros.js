"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rect = canvas.getBoundingClientRect(); //donde esta el canvas con respecto a la pantalla
let width = canvas.width;
let height = canvas.height;
let x = 0,
    y = 0,
    dibujando = false,
    color = 'black',
    grosor = 1; //variables globales

let image = new Image();
//image.src = "img/ciudad.jpg";

//image.onload = function() {
//    myDrawImageMethod(this);
//}

let input = document.getElementById("myFile"); //se carga imagen que se quiere desde ordenador de usuario
input.addEventListener('change', function(event) {
    let f = event.target.files[0];
    let fr = new FileReader();

    fr.onload = function(ev2) {
        image.src = ev2.target.result;
        image.onload = function() {
            myDrawImageMethod(this);
        }
    }
    fr.readAsDataURL(f);
});

function myDrawImageMethod(imagen) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / imagen.width;
    var vRatio = canvas.height / imagen.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - imagen.width * ratio) / 2;
    var centerShift_y = (canvas.height - imagen.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imagen, 0, 0, imagen.width, imagen.height,
        centerShift_x, centerShift_y, imagen.width * ratio, imagen.height * ratio);
}


function Grises() {
    let data = ctx.getImageData(0, 0, image.width, image.height);
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
    let data = ctx.getImageData(0, 0, image.width, image.height);
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
    let data = ctx.getImageData(0, 0, image.width, image.height);
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
    let data = ctx.getImageData(0, 0, image.width, image.height);
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

function Saturacion() {

    let data = ctx.getImageData(0, 0, image.width, image.height);
    let contrast = 150; // Default value

    let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];

        data.data[index * 4] = factor * (rojo - 128) + 128;
        data.data[index * 4 + 1] = factor * (verde - 128) + 128;
        data.data[index * 4 + 2] = factor * (azul - 128) + 128;
    }

    ctx.putImageData(data, 0, 0);
}


function Blur() {
    let data = ctx.getImageData(0, 0, image.width, image.height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];

        /* if(data.data[index*4-4].isEmpty()){
             let promr = (data.data[index*4]+data.data[index*4+4])/2;
             let promg = (data.data[index*4+1]+data.data[index*4+1+4])/2;
             let promb = (data.data[index*4+2]+data.data[index*4+2+4])/2;
         }
         if(data.data[index*4+4].isEmpty()){
             let promr = (data.data[index*4]+data.data[index*4-4])/2;
             let promg = (data.data[index*4+1]+data.data[index*4+1-4])/2;
             let promb = (data.data[index*4+2]+data.data[index*4+2-4])/2;
         }
         else{*/
        let promr = (data.data[index * 4] + data.data[index * 4 - 4] + data.data[index * 4 + 4]) / 3;
        let promg = (data.data[index * 4 + 1] + data.data[index * 4 + 1 - 4] + data.data[index * 4 + 1 + 4]) / 3;
        let promb = (data.data[index * 4 + 2] + data.data[index * 4 + 2 - 4] + data.data[index * 4 + 2 + 4]) / 3;
        //}
        data.data[index * 4] = promr;
        data.data[index * 4 + 1] = promg;
        data.data[index * 4 + 2] = promb;
    }
    console.log(data.data.length);
    ctx.putImageData(data, 0, 0);
}

function Brillo() {
    let data = ctx.getImageData(0, 0, image.width, image.height);
    for (let index = 0; index < data.data.length; index++) {
        let rojo = data.data[index * 4];
        let verde = data.data[index * 4 + 1];
        let azul = data.data[index * 4 + 2];

        rojo = rojo + 30;
        verde = verde + 30;
        azul = azul + 30;

        data.data[index * 4] = rojo;
        data.data[index * 4 + 1] = verde;
        data.data[index * 4 + 2] = azul;
    }
    ctx.putImageData(data, 0, 0);
}

// PAINT LAPIZ Y GOMA DE BORRAR
function definir_color(c) {
    color = c;
    grosor = 2;
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
    ctx.lineCap = 'round';
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

// guardar imagen 
document.getElementById('descargar').onclick = function() {

    let filename = prompt("Guardar como", ""),
        link = document.createElement('a');

    if (filename == null) { //si el usiario dio cancelar
        return false;
    } else if (filename == "") { //si el usuario le dio click y no puso nombre al archivo
        link.download = "Sin título";
        link.href = canvas.toDataURL("image/png"); //usa la imagen del canvas
    } else { //si el usuario le dio aceptar y puso un nombre al archivo
        link.download = filename;
        link.href = canvas.toDataURL("image/png");
    }
    link.click();
}

document.getElementById('reset').onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}