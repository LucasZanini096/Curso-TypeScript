//Tipo any -> representa a falta de um tipo ou é a representação de múltiplos tipos
//Não é recomendado utilizar o tipo any, pois tira a especificidade dos dados

function Message(msg: any) {
  //Função que aceita qualquer tipo em seu parâmetro
  return msg;
}

//Exemplos -> todos são aceitos
console.log(Message([1, 2, 3]));
console.log(Message("a"));
console.log(Message(1));
