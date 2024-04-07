//Array <T> - T[] -> maneiras de definir o tipo de um

export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  //Está retornando um Array de String
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concat = concatStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upper);
