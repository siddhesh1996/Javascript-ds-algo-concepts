function solution(str, ending) {

    return str.substring((str.length - ending.length), str.length).toString() === ending
}

let str = 'abcde';
let ending = 'cde';
console.log(solution(str, ending))