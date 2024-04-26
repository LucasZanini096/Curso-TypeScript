import { pessoa } from '../Aula03-TipoVoid';

let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10; //O tipo de y apenas pode ser 10, pois o seu tipo literal é const
//O seu subtipo é number

//let a: 100 = 100;
let a = 100 as const;
//a = 120; //O valor apenas pode ser atribuído para o valor 100

const person = {
  name: 'Lucas' as const, //Defini que esta chave é constante -> não pode ser modificada
  sobrenome: 'Zanini',
};

//person.name= 'Luiz' //Não posso fazer isso

function chooseColor(color: 'red' | 'yellow' | 'blue'): string {
  return color;
}

console.log(chooseColor('blue'));

//Module Mode
export default 1;
