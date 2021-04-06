const mapFunction = (arr) => {
  let newArr= [];
  for ( let i = 0; i < arr.length; i++){
    newArr = [ ...newArr, arr[i] + 1] 
  }

  return newArr;

};

const filterFunction = (arr) => {
  let tempArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
      tempArr = [ ...tempArr, arr[i]] 
    }
  }
  
  return tempArr;

};

const findIndexFunction = (arr) => {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 4){
      return i
    }
  }

};


const reduceFunction = (arr, callback, initialValue) => {

  let accumulator = initialValue
  for(let item of arr) accumulator = callback(accumulator, item);
  
  return accumulator;
}


const everyFunction = (arr, callback) => {
for(let item of arr) {
    if (!callback(item)) return false;
}

return true;
}

module.exports = {
  mapFunction,
  filterFunction,
  findIndexFunction,
  reduceFunction,
  everyFunction
};