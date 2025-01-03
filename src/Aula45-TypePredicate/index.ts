export function isNumber(value: any): value is number {
  //Se o retorno for true, o valor é number, se for false, o valor não é number -> Predicate
  return typeof value === 'number'; //Type Guard
}

export function isString(value: any): value is string {
  return typeof value === 'string'; //Type Guard
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3, 4, 5));
console.log(soma('a', 'b', 'c'));
console.log(soma(1, 2, 'a', 'b')); // A soma é feita apenas com os números, os valores que não são números são ignorados
// Ocorreu a inferência do tipo number antes de string, pois o TypeScript entendeu que o tipo number é mais específico que o tipo string
// Se fosse o contrário, o TypeScript inferiria o tipo string antes de number
// O TypeScript infere o tipo mais específico antes do tipo mais genérico
