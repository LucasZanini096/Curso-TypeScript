export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

// const pessoa1 = new Pessoa('Luiz', 30);
// const pessoa2 = new Pessoa(['Luiz'], 30);
// const pessoa3 = new Pessoa<string, number>('Luiz', 30);
// const pessoa4 = new Pessoa<number, string>(30, 'Luiz');

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {}; //index signature -> chave do objeto é um número, ou seja, o índice do array

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}
