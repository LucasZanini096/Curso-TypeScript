// Encadeamento opcional = Operador de encadeamento opcional (?.) permite ler o valor de uma propriedade localizada dentro de uma cadeia de objetos conectados sem ter que validar expressamente se cada referência na cadeia é válida.
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data');

// Não Valores -> null e undefined
// Operador ?? -> Operador de coalescência nula (??) é um operador lógico que retorna seu operando do lado direito quando seu operando do lado esquerdo é null ou undefined. Caso contrário, ele retorna seu operando do lado esquerdo.
