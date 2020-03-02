module.exports = function countCats(arr) {
  let score = 0
  arr = arr.join(",").split(",")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "^^") {
      score++
    }
  }
  return score
};
