module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    turnsSpeed = turnsSpeed/3600
    let resault = {}
    resault['turns'] = Math.pow(2, disksNumber)
    resault['seconds'] = resault['turns']/turnsSpeed
    return(resault)
}