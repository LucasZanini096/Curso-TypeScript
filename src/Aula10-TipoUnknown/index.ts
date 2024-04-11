//Tipo Unknown -> tenho que verificar o tipo de dado para realizar uma determinada operação

let x: unknown;

x = 'string';
x = 90;
const y = 80;

if (typeof x === 'number') console.log(x + y);
