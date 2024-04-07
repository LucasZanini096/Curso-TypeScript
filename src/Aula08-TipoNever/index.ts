// O tipo never é um tipo de função que define que uma função retorne nada e
// pode lançar um erro que quebra o código, havendo a necessidade de ser tratado

export function setError(): never {
  throw new Error('Qualquer erro');
}

setError();
