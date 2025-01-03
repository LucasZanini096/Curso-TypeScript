// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>; //Tranqforma todos os campos não opcionais em obrigatórios
// Partial
type PessoaPartial = Partial<PessoaRequired>; //Transforma todos os campos obrigatórios em opcionais
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>; //Transforma todos os campos em readonly, ou seja, não podem ser alterados
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>; //Pega apenas os campos informados

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; //Pega os valores que estão em ABC e não estão em CDE (A e B)
type TipoExtract = Extract<ABC, CDE>; //Pega os valores que estão em ABC e estão em CDE (C)

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdasdasd',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

function mapAccount(account: AccountMongo): AccountApi {
  const { _id, ...accountData } = account;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
