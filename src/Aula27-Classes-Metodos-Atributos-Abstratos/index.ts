export abstract class Personagem {
  //Estou criando apenas uma ideação. Dessa forma ela não pode ser instânciada
  //Só posso instância ela apenas por sub-classes que herdam dela

  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.nome} está atacando...`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void; //Métodos abstratos não podem ter corpo. Todas as sub-classes devem possuir esse método declarado
}

export class Guerreira extends Personagem {
  //É uma classe concreta em relação a Perosnagem

  emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'GUERREIRAAAAA AOOOOOO ATAQUEEEEE');
    //super.bordao();
  }
}
export class Monstro extends Personagem {
  emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'MONSTERRRRRRRR');
    //super.bordao();
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);
//const personagem = new Personagem('Monstro', 87, 1000); Dá erro, pois é uma classe abstrata

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
