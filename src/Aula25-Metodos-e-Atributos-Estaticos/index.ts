export class Pessoa {
  static idadePadrao = 0; //Não pode ser acessado pelo this da classe
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    //Método Fábrica
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Lucas', 'Zanini', 20, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Lucas', 'Zanini');
