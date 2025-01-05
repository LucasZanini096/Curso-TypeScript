//Os Decorators de classes são funções que são chamadas quando a classe é declarada, não quando é instanciada (como os decorators de métodos e propriedades).
//Os decorators de classes são usados para modificar a classe que está sendo decorada.
@decorator
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  //O target é a classe que está sendo decorada (Animal)
  // new (...args: any[]) => any é um construtor que recebe qualquer argumento e retorna qualquer coisa
  //console.log("OI de dentro do decorator");
  //É chamado quando a classe é declarada, não quando é instanciada

  return class extends target {
    cor: string;
    nome: string;
    constructor(...args: any[]) {
      //console.log("Antes de chamar o construtor da classe");
      super(...args);
      this.cor = this.inverte(args[1]);
      this.nome = this.inverte(args[0]);
      //console.log("Depois de chamar o construtor da classe");
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Lucas', 'Roxo');
console.log(animal);
