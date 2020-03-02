class VigenereCipheringMachine {
    encrypt(str, key) {
        str = str.toUpperCase()
        key = key.toUpperCase()
        let resaultSting = []
      
        for (let i = 0, j = 0; i < str.length; i++) {
          let code = (str.charCodeAt(i))
          if (code > 90 || code < 65) {
            resaultSting[i] = String.fromCharCode(code)
          } else {
            resaultSting[i] = String.fromCharCode((((code - 65) + (key.charCodeAt(j % key.length) - 65)) % 26) + 65)
            j++
          }
        }
        return resaultSting.join('')
    }

    decrypt(str, key){
        str = str.toUpperCase()
        key = key.toUpperCase()
        let resaultSting = []
      
        for (let i = 0, j = 0; i < str.length; i++) {
          let code = (str.charCodeAt(i))
          if (code > 90 || code < 65) {
            resaultSting[i] = String.fromCharCode(code)
          } else {
            resaultSting[i] = String.fromCharCode((((code - 65) + 26 - (key.charCodeAt(j % key.length) - 65)) % 26) + 65)
            j++
          }
        }
        return resaultSting.join('')
    }12 
}

module.exports = VigenereCipheringMachine;
