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
  let sum = 0;
  return sum;
}