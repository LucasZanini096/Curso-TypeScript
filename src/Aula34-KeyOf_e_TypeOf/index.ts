type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  azul: 'blue',
  verde: 'green',
};

function traduxirCor(cor: CoresChaves, cores: typeof coresObj) {
  return cores[cor]; //Problema -> cores[cor] pode ser undefined, pois a chave cor pode não existir no objeto cores
}

// TypeOf -> é uma forma de pegar o tipo de uma variável, de forma dinâmica
// KeyOf -> é uma forma de pegar as chaves de um objeto, de forma dinâmica
