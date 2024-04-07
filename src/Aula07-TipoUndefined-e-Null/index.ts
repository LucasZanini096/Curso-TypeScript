let x;
if (typeof x === 'undefined') x = 20; //Variável x sendo definida nesta linha de código
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

//Parâmetros opcionais quando declarados podem ser atribuidos com o tipo undefined

export function squareOf(a: any) {
  if (typeof a === 'number') return a * a;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 2);
}
