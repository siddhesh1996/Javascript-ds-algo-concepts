function equalStacks(h1, h2, h3) {
    // Write your code here
    let reverseSumH1 = reverseSum(h1).reverse();
    let reverseSumH2 = reverseSum(h2).reverse();
    let reverseSumH3 = reverseSum(h3).reverse();

    let smallestLength = Math.max(reverseSumH1.length,reverseSumH2.length,reverseSumH3.length);
    let minNum = 0;
    if(smallestLength === reverseSumH1.length) {
        for(let i =0 ; i < reverseSumH1.length; i++) {
            let num = reverseSumH1[i];
            if(reverseSumH2.includes(num) && reverseSumH3.includes(num)) {
                minNum = num;
                break;
            }
        }
    } else if(smallestLength === reverseSumH2.length) {
        for(let i =0 ; i < reverseSumH2.length; i++) {
            let num = reverseSumH2[i];
            if(reverseSumH1.includes(num) && reverseSumH3.includes(num)) {
                minNum = num;
                break;
            }
        }
    } else if(smallestLength === reverseSumH3.length) {
        for(let i =0 ; i < reverseSumH3.length; i++) {
            let num = reverseSumH3[i];
            if(reverseSumH1.includes(num) && reverseSumH2.includes(num)) {
                minNum = num;
                break;
            }
        }
    }

    return console.log(minNum);
}

function reverseSum(arr) {
    let reverseArr = arr.reverse();
    let prev = 0;
    reverseArr = reverseArr.map(elem => {
        prev += elem;
        return prev;
    });
    return reverseArr;
}

/* Test cases */

// let h1 = [3,2,1,1,1]; 
// let h2 = [4,3,2];
// let h3 = [1,1,4,1];

// let h1 = [1,2,1,1];
// let h2 = [1,1,2];
// let h3 = [1,1];

let h1 = [2,2];
let h2 = [1,1];
let h3 = [1,1];

equalStacks(h1,h2,h3);

