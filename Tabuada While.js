import tabuada from 'readline-sync';

let contador = 0;
let numero = tabuada.question("Insira o valor que deseja multiplicar:");

console.log("Tabuada!");

while(contador <= 10){
    let resultado = numero * contador;
    console.log(numero + "x" + contador + "=" + resultado);
    contador ++;
}


