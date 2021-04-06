const {
  filterFunction,
  mapFunction,
  findIndexFunction,
  reduceFunction,
  everyFunction
  } = require('./arrayMethods');


describe('mapFunction', () => {
    it('should use callback function in mappedFunction to get a new mapped arr * 2', () => {

      const numbers = [ 1, 2, 3, 4, 5]

      const actual = mapFunction(numbers, (i) => i + 1)

      expect(actual).toEqual([2, 3, 4, 5, 6])

    });
});


describe('filterFunction', () => {
  it('should get old arr and return modified arr with even numbers only', () => {

    function ifFunction(number){
      if (number % 2 === 0){
        return number
      }
    }

    const numbers = [ 1, 2, 3, 4, 5]

    const actual = filterFunction(numbers, (i) => ifFunction(i))

    expect(actual).toEqual([2, 4])

  });
});


describe('findIndexFunction', () => {
  it('should return index', () => {

    function ifFunction(number){
      if (number > 4){
        return number[i]
      }
    }

    const numbers = [ 1, 2, 3, 4, 5]

    const actual = findIndexFunction(numbers, (i) => ifFunction(i))

    expect(actual).toEqual(4)

  });
});


describe('reduceFunction', () => {
  it('should return the accumulation', () => {

    const arr = [ 1, 2, 3, 4, 5]
    let initialValue = 2;
    const callback = (accumulator, item) => accumulator + item
  

    const actual = reduceFunction(arr, callback, initialValue)

    expect(actual).toEqual(17)

  });
});

describe('everyFunction', () => {
  it('should return false', () => {

    const arr = [ 1, 2, 3, 4, 5]

    const callback = (item) => item === 1
  

    const actual = everyFunction(arr, callback)

    expect(actual).toBeFalsy();

  });

  it('should return true', () => {

    const arr = [ 1, 1, 1, 1]

    const callback = (item) => item === 1
  

    const actual = everyFunction(arr, callback)

    expect(actual).toBeTruthy();

  });
});