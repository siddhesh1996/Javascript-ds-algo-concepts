function accum(s) {
    return s.split('').map((l, i) => l.toUpperCase() + l.repeat(i).toLowerCase()).join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));