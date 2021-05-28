function removeDuplicateWords(s) {
    let seen = new Set();
    let sArr = s.split(" ").filter(word => {
            if (seen.has(word)) return false
            seen.add(word);
            return true
        })
        .join(' ');
    return sArr
}

let s = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
console.log(removeDuplicateWords(s))