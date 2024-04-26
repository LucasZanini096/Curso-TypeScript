export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + '' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    //Declarando o construtor da Classe Aluno, na qual herda de Pessoa
    nome: string, //Quando eu for declarar um atributo da super classe, eu não posso falar se é publico ou privado, pois já foi declarado antes
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, //Criando um atributo exclusivo de Aluno
  ) {
    super(nome, sobrenome, idade, cpf); //Acessando os atributos na super classe
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + 'HEYYYYYYY!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente,: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Lucas', 'Zanini', 20, '47875112893', '123');
const cliente = new Cliente('Lucas', 'Zanini', 20, '47875112893');
