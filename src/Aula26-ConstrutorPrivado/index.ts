// Padrão de Projeto Singleton - GoF | Factory Method
export class DataBase {
  //Eu quero criar apenas uma única instância referente a esta classe. Não pode haver mais de uma.

  private static database: DataBase; //Declarar um atributo estático referênciando a própria intância da classe

  private constructor(
    //Não pode ser acesado fora da classe
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getDatabase(host: string, user: string, password: string): DataBase {
    //Método estático que permite criar uma única vez uma instância da classe
    if (DataBase.database) return DataBase.database;
    DataBase.database = new DataBase(host, user, password);
    return DataBase.database;
  }

  connect(): void {
    console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const db1 = DataBase.getDatabase('localhost', 'root', '123456');
console.log(db1);

const db2 = DataBase.getDatabase('localhost', 'root', '123456');
console.log(db2);

console.log(db1 === db2);
