export function multiples(sumTo) {
  let sum = 0;
  for (let index = 0; index < sumTo; index++) {
    if (index % 3 === 0) {
      sum += index;
    }
    else if (index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
}

export function fibonacci(sumTo) {
  let array = [1, 2];
  for (let index = 0; index < sumTo; index++) {
    const element = array[index];
    const element2 = array[index + 1];
    const newElement = element + element2;
    array.push(newElement);
    if (newElement > sumTo) {
      break;
    }
  }
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
      sum += element;
    }
  }
  return sum;
}