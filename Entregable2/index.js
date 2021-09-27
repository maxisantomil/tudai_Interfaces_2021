"user strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
for (let i = 0; i < 10; i++) {
    let fichas_j1 = new fichaCircular(50, 50 + i * 50, 'red', ctx);
    // fichas_j1.setFill();
    fichas_j1.draw('img/river.png');
}

for (let i = 0; i < 10; i++) {
    let fichas_j2 = new fichaCircular(850, 50 + i * 50, 'blue', ctx);
    //fichas_j2.setFill();
    fichas_j2.draw('img/poker2.png');
}