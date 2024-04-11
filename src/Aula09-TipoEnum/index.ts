enum Colors {
  RED, //0
  BLUE, //1
  YELLOW, //2
}

enum Colors { //Posso fazer merge com os enums nomeados com mesmo nome
  PURPLE = 'PURPLE',
  ORANGE = 5,
  BLACK,
}

enum Colors2 {
  RED = 10, //10
  BLUE = 100, //100
  YELLOW = 1000, //1000
}

console.log(Colors);

console.log(Colors.BLUE);
console.log(Colors[0]);
