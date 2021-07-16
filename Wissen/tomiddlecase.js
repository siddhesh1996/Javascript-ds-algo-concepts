String.prototype.toMiddleCase = function () {
    let strLen = this.length;
    let middleIdx = 0;
    let resultStr = this.toLowerCase();
    if (strLen % 2 !== 0) {
        middleIdx = Math.floor(strLen / 2);
        resultStr = this.replace(this[middleIdx], this[middleIdx].toUpperCase());
        return resultStr;
    } else {
        middleIdx = Math.floor(strLen / 2);
        let middlePrevIdx = middleIdx - 1;
        resultStr = this.replace(this[middleIdx], this[middleIdx].toUpperCase());
        resultStr = resultStr.replace(this[middlePrevIdx], this[middlePrevIdx].toUpperCase());
        return resultStr;
    }
}

console.log('siddheshk'.toMiddleCase());