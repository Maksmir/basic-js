module.exports = function createDreamTeam(arr) {
  let dreamName = []
  
  if (arr){
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        for(let j = 0; j<arr[i].length; j++){
          if(arr[i][j] != " "){
            dreamName.push(arr[i][j].toUpperCase())
            break
          }
        }
      }
    }
  }
  if (!arr || dreamName.length == 0){
    return false
  }
  return dreamName.sort().join('')
};