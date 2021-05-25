function accum(s) {
    return sArray = s.split('').map((letter, index) => {
        return letter.toUpperCase() + letter.repeat(index).toLowerCase()
    }).join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));