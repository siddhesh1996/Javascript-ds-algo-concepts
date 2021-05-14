function pairs(k, arr) {
    // Write your code here
    let pairCount = 0;

    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let diff = num - k;

        if(num > k) {
            for(let j = 0; j < arr.length; j++) {
                if(i != j && arr[j] === diff) {
                    pairCount++;
                    break;
                }
            }
        }
    }

    return console.log(pairCount);
}

let k = 2;
let arr = [1,5,3,4,2];
pairs(2,arr);

