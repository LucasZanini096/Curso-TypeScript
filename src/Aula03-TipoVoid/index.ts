//Tipo Void -> define que algum dado retorna Void (Nada)

//Exemplo

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Zanini',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Lucas', 'Zanini');
pessoa.exibirNome();

//Script Mode -> trabalha em âmbito global ( não posso declarar uma variável de mesmo nome em arquivos diferentes)
//Module Mode -> trabalha apenas em escopo de módulo. Para sair do Script Mode eu tenho que exportar a variável de nomenclatura duplicada

export { pessoa }; //Module Mode
