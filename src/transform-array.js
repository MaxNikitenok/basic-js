const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (arr === []) return [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arrResult = []

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
      continue
    } else if(arr[i] === '--discard-prev') {
      if ( typeof(arrResult[arrResult.length - 1]) !== 'undefined' && arr[i-2] !== '--discard-next') {
          arrResult.splice(arrResult.length - 1, 1);
      } continue
    } else if (arr[i] === '--double-next') {
      if ( typeof(arr[i+1]) !== 'undefined' ) {
        arrResult.push(arr[i+1]);
      } continue
    } else if (arr[i] === '--double-prev'){
      if ( typeof(arr[i-1]) !== 'undefined' && arr[i-2] !== '--discard-next' ) {
        arrResult.push(arr[i-1]);
      } continue
    } else {
      arrResult.push(arr[i]);
      console.log(arrResult);
      continue
    }
  }
  return arrResult
}

module.exports = {
  transform
};
