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