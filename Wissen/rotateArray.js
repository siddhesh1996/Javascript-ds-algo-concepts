
function rotateLeft(d, arr) {
    // Write your code here
    if (d === arr.length) {
        return arr;
    }

    let splicedArr = arr.splice(0, d);
    arr = [...arr, ...splicedArr];

    return arr;
}

let d = 2;
let arr = [1,2,3,4,5];

console.log(rotateLeft(d,arr));