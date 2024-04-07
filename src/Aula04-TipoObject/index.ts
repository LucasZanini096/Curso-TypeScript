const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //Index Signature -> permite criar múltiplas chaves em meu objeto
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Novo Valor';
objetoA.chaveC = 'Valor C';
objetoA.chaveD = 'Valor D';

const ObjetoB: {
  readonly chaveA: string; //ReadOnly não me permite alterar o valor de uma chave de um objeto
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
