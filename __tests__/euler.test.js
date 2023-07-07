import {multiples, fibonacci} from "../src/euler";

describe('multiples', () => {
  
  test('it returns the sum of the multiples of 3 or 5 below 10', () => {
    expect(multiples(10)).toEqual(23);
  });

  test('it returns the sum of the multiples of 3 or 5 below a given argument', () => {
    expect(multiples(1000)).toEqual(233168);
  });
});

describe('fibonacci', () => {
  
  test('it returns a number', () => {
    expect(typeof fibonacci()).toEqual('number');
  });

  test('it returns the sum of even values in the Fibonacci sequence whose values do not exceed four million', () => {
    expect(fibonacci(4000000)).toEqual(4613732);
  });
});