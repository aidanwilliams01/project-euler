import determineTriangle from "../src/euler";

describe('multiples', () => {
  
  test('it returns the sum of the multiples of 3 or 5 below 10', () => {
    expect(determineTriangle()).toEqual(23);
  });
});