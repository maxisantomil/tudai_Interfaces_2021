"user strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
for (let i = 0; i < 10; i++) {
    let fichas_j1 = new fichaCircular(50, 50 + i * 50, 'red', ctx);
    ficha_p1.draw();
}

for (let i = 0; i < 10; i++) {
    let fichas_j2 = new fichaCircular(850, 50 + i * 50, 'blue', ctx);
    ficha_p2.draw();
}