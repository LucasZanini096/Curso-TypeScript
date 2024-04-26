export function funcao(this: Date, nome: string, idade: number): void {
  console.log(this);
  console.log(nome, idade);
}

funcao.call(new Date(), 'Lucas', 19); //Call -> método que define qual será o this de uma função
funcao.apply(new Date(), ['Lucas', 19]) //Apply -> método que define qual será o this de uma função, no entanto
