module.exports = class DepthCalculator {

    calculateDepth(arr, x = 1, b = 0,){
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
           b = this.calculateDepth(arr[i], x + 1, b)
          }
        }
        if (x > b) {
          b = x
        }
          return b
    }    
};
