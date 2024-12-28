//Restrições em Generics -> Podemos restringir o tipo de dado que será passado para um generic

type ObterChavesFn = <T>(obj: T) => string[];
const obterChaves: ObterChavesFn = (obj) => Object.keys(obj);
//Irá gerar um erro -> obterChaves(10);
//Esse erro ocorre porque o tipo number não possui a propriedade keys
