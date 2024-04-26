//Type casting -> conversão de um tipo para outro tipo

//Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red'

// Non-null assertion (!)
const body2 = document.querySelector('body')!; //Estou informando ao TypeScript que este elemento não é nulo
body2.style.background = 'red'

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement; //Estou afirmando ao TypeScript que este elemento é do tipo HTMLBodyElement
body2.style.background = 'red'

//HTMLElement

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

//Type assertion
const body4 = (document.querySelector('body') as unknown) as number;
