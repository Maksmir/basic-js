module.exports = function repeater(str, options) {
    let resultStr = ""
    let addition  = ""
    let repeatStr = (str, repeatTimes, separator = "+") => {
        let string = ''
        string = str
        for (let i = 0; i < repeatTimes-1; i++) {
            string = string+separator+str
        }
        return string
    }
    if(options.addition !== undefined){
        addition  = options.addition
        addition =  repeatStr(options.addition, options.additionRepeatTimes, options.additionSeparator)
    }

    resultStr = repeatStr(str+addition, options.repeatTimes, options.separator)

    return resultStr
};
