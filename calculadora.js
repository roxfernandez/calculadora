const process = require('process');
const sumar =require('./sumar');
const restar = require('./restar');
const multiplicar = require ('./multiplicar');
const dividir = require('./dividir');

//console.log(sumar);
//console.log(restar);
//console.log(multiplicar);
//console.log(dividir);

const operaciones =['sumar','restar','multiplicar','dividir']

const operacion = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];
let resultado = 0;

if (operacion === "sumar"){
    resultado = sumar.sumar(numeroA,numeroB)
}
//console.log(resultado);

if (operacion === "restar"){
    resultado = restar.restar(numeroA,numeroB)
}
//console.log(resultado)

if (operacion === "multiplicar"){
    resultado = multiplicar.multiplicar(numeroA,numeroB)
} 
//console.log(resultado)

 if(operacion === "dividir"){
    resultado = dividir.dividir(numeroA,numeroB)
 }
  console.log(resultado)