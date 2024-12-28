//Type Guard -> é uma forma de garantir que um determinado tipo de variável é de um determinado tipo

type Humano = { tipo: 'humano'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type HumanoAnimal = Humano | Animal;

export class Aluno implements Humano {
  tipo: 'humano' = 'humano';
  constructor(public nome: string) {}
}

function mostrarNome(obj: HumanoAnimal) {
  // if ('nome' in obj) {console.log(obj.nome); }
  //if (obj instanceof Aluno) {console.log(obj.nome); }

  switch (obj.tipo) {
    case 'humano':
      console.log(obj.nome);
      break;
    case 'animal':
      console.log(obj.cor);
      break;
  }
}
