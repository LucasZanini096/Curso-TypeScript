function decorator(params: string, params2: string) {
  //Closure
  return function <T extends new (...args: any[]) => any>(target: T) {
    //Função Decoradora que recebe a classe e retorna uma nova classe. Por fim ela é retornada para a função decorator
    return class extends target {
      //Classe Anônima
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
        return (
          valor.split('').reverse().join('') + ' ' + params + ' ' + params2
        );
      }
    };
  };
}

@decorator('Valor1', 'Valor2')
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}

const animal = new Animal('Lucas', 'Roxo');
console.log(animal);
