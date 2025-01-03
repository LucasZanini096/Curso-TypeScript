//Restrições em Generics -> Podemos restringir o tipo de dado que será passado para um generic

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];
// O extends object -> Restrição para que o tipo O seja um objeto
// K extends keyof O -> Restrição para que o tipo K seja uma chave do objeto O
// extends -> Restrição

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina1', 'Vacina2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
