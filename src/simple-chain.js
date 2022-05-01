const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr:[],
  getLength() {
    return chainMaker.newArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    console.log(`( ${value} )`)
    return chainMaker;
  },
  removeLink(position) {
    if (this.chainArr[position - 1] === undefined) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return chainMaker
  },
  finishChain() {
    let result = this.chainArr.join('~~');
    this.chainArr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
