//Os tipos tupla são listas que possuem um tamanho específico,
//Possuem a definição do tipo de dado em cada posição da tupla
//Podem ser ou não imutáveis ( mais recomendado )

//Tuple
const dadosCliente1: readonly [number, string] = [1, 'Lucas']; //Readonly -> configura uma tupla imutável
const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Zanini'];
const dadosCliente3: [number, string, ...string[]] = [
  1,
  'Lucas',
  'Zanini',
  'Silva',
];
// Utilização do rest operator para definir que a tupla pode receber strings, sem haver a limitação de dados

// Podemos configurar readonly para arrays também !

const array1: readonly string[] = ['Lucas', 'Zanini'];
const array2: ReadonlyArray<string> = ['Lucas', 'Zanini'];
