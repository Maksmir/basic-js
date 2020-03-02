const chainMaker = {
  chain: [],
  getLength() {
    let resault = chainMaker.chain.length
    chainMaker.chain = []
    return resault
  },
  addLink(value = " ") {
    chainMaker.chain.push("( "+value+" )")
    return chainMaker
  },
  removeLink(position) {
    if (chainMaker.chain[position - 1] == undefined) {
      chainMaker.chain = []
      throw new Error();
    } else {
      chainMaker.chain.splice(position - 1, 1)
      return chainMaker
    }
  },
  reverseChain() {
    chainMaker.chain.reverse()
    return chainMaker
  },
  finishChain() {
    let resault = chainMaker.chain.join("~~")
    chainMaker.chain = []
    return resault
  }
};

module.exports = chainMaker;
