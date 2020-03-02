module.exports = function transform(arr) {
    let newArr = []
    if (Array.isArray(arr) == false) {
        throw new Error();
    }
    
    let pushToArr = (num) => {
        if (arr[num] !== "--discard-next" && arr[num] !== "--discard-prev" && arr[num] !== "--double-next" && arr[num] !== "--double-prev") {
            if (num < arr.length && num >= 0) {
                newArr.push(arr[num])
            }
        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            i++
        } else if (arr[i] === "--discard-prev") {
            newArr.pop()
        } else if (arr[i] === "--double-next") {
            pushToArr(i + 1)
        } else if (arr[i] === "--double-prev") {
            pushToArr(i - 1)
        } else {
            pushToArr(i)
        }
    }
    return newArr
};
