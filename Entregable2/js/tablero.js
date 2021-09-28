class Tablero{
constructor(posX, posY, context, width, height){
    this.posX=posX;
    this.posY=posY;
    this.fill=fill;
    this.context=context;
    this.widthT=width;
    this.heightT=height;

    let image1 = new Image();
    image1.src = "img/1.png";
    
    image1.onload = function() {
        myDrawImageMethod(this);
    }
    function myDrawImageMethod(image) {
        ctx.drawImage(image, 150, 150);
    }
}




}