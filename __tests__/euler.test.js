import multiples from "../src/euler";

describe('multiples', () => {
  
  test('it returns the sum of the multiples of 3 or 5 below 10', () => {
    expect(multiples(10)).toEqual(23);
  });

  test('it returns the sum of the multiples of 3 or 5 below a given argument', () => {
    expect(multiples(1000)).toEqual(233168);
  });
});