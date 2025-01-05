function decorator(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    //Preciso retornar um novo descriptor, ou seja, um objeto com as mesmas propriedades do descriptor original
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
    writable: false,
  };
}

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    const ultimoNome = palavras.pop();
    this.sobrenome = ultimoNome || '';
  }
}
