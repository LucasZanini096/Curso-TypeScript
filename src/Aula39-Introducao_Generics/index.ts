type FilterCallback<T> = (value: T, index?: number, array?: T[]) => boolean;

function filtraArray<T>(array: T[], callback: FilterCallback<T>): T[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ArrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(ArrayFiltradoOriginal);
