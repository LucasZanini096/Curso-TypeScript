//Overload de metodos e funções -> é uma forma de definir diferentes formas de um método ou função ser chamado

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]): number => {
  if (args.length > 0)
    return args.reduce((acc, curr) => acc + curr, 0) + x + (y || 0);
  return x + (y || 0);
};
