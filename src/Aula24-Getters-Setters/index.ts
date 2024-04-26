export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf; //Outra possbilidade de chamada do setter
  }

  set cpf(cpf: string) {
    //Não pode ter type annotation
    //Se comporta como se fosse um atributo da classe
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Lucas', 'Zanini', 20, '000.000.000-00');
pessoa.cpf = '123.456.789-99'; //Sinal de igual em relação a um dado vai chamar o setter
console.log(pessoa.cpf); //Estou chamando o getter do cpf
