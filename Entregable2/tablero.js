"use strict";
class Tablero {
    constructor(posX, posY, context, width, height) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.context = context;

        let image1 = new Image();
        image1.src = "img/tablero.jpg";


        image1.onload = function() {
            myDrawImageMethod(this);
        }

        function myDrawImageMethod(image) {
            context.drawImage(image, width, height);
        }
    }


}