/*eslint-disable*/

//Inferência de tipo -> em operações de atribuição como no exemplo a baixo, o TypeScript já vai inferir o tipo do dado

let nome: string = "Lucas"; //A anotação :string é considerado uma type annotation

//Tipos de Type Annotation em TypeScript

// Tipos básicos (aqui ocorre inferência de tipos)
let nome1: string = "Luiz"; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ["a", "b"];
let arrayDeStrings2: string[] = ["a", "b"];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: "Luiz",
};

//Em adulto?: boolean estou declarando que a chave deste objeto é opcional, ao contrário das chaves nome e idade

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

// Module mode
export default 1;
