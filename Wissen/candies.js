function candies(n, arr) {
    // Write your code here
    let candies = '1'.repeat(n).split('');

    for (let i = 0; i < n; i++) {
        if(arr[i + 1] > arr[i]) {
            candies[i + 1] = +candies[i] + 1;
        }
    }

    for (let j = n - 1; j >= 0; j--) {
        if(arr[j - 1] > arr[j] && candies[j - 1] <= candies[j]) {
            candies[j - 1] = +candies[j] + 1;
        }
    }
    
    let sum = candies.reduce((prev,curr) => +prev + +curr,0);

    return sum;
}

// let arr = [4,6,4,5,6,2];
// let arr = [1,2,2];
let arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1];
// let arr = [2,4,3,5,2,6,4,5];
// let arr = [1,1,2,3,4,5,6,5,4,3,2,1];
let n = arr.length;

candies(n, arr);