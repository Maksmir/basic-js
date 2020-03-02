const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivity2 = []
    let scorePoints = 0
  if(typeof sampleActivity !== "string"){
    return false
  } else {
    for (let i = 0; i<sampleActivity.length; i++){
      if (sampleActivity[i] == "."){
        scorePoints++
      }
      if (scorePoints<2){
        sampleActivity2.push(sampleActivity[i])
      }
    }
    sampleActivity = Number(sampleActivity2.join(''))
    if(sampleActivity <= MODERN_ACTIVITY && sampleActivity>0){
      return (Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD)))
    } else {
      return false
    }
  }
};
