const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, {repeatTimes = 1, separator = '+', addition = "", additionRepeatTimes = 1, additionSeparator = '|'}) {
  let result = []
  let newArr = []
  for(let i=0;i<additionRepeatTimes;i++) {
     newArr.push(`${addition}`)
  }
    for(let i=0;i<repeatTimes;i++) {
    result.push(str+newArr.join(additionSeparator))
  }
  return result.join(separator)
}

module.exports = {
  repeater
};



