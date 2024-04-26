export class Empresa {
  public readonly nome: string //Atributo que pode ser acessado fora da classe, porém não pode ser modificado
  private readonly colaboradores: Colaborador[] = []; //Caso eu não declaro alguma das palavras chaves ( public, private ou protected ), o padrão será public
  protected readonly cnpj: string;


  constructor(nome: string, cnpj: string) { //Inicializando o valor
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores){
      console.log(colaborador)
    }
  }

}

export class Colaborador { //Classes podem definir tipos também
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string ){}
}


const empresa1 = new Empresa('ITAÚ', '11.111.111/0001-11')
const colaborador1 = new Colaborador('Lucas', 'Zanini');
const colaborador2 = new Colaborador('Julia', 'Simei');
const colaborador3 = new Colaborador('Pedro', 'Sales');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador({  //Structural Types
  nome: 'Gabriel',
  sobrenome: 'Ken'
})

console.log(empresa1.nome)
