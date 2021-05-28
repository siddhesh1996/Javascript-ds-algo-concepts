function capitalize(s) {
    let resultArr = []
        // Even cap
    let str1 = '';
    let str2 = '';
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        i % 2 === 0 ? str1 += letter.toUpperCase() : str1 += letter;
    }
    // Even small
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        i % 2 === 0 ? str2 += letter : str2 += letter.toUpperCase();
    }
    resultArr.push(str1, str2);
    return resultArr;
};

let s = "abcdef";
console.log(capitalize(s))