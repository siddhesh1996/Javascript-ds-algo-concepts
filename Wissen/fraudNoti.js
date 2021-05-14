/*
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */

function activityNotifications(expenditure, d) {
    // Write your code here
    let notiCount = 0;
    let passbook = {};

    for(let i = 0; i < expenditure.length; i++) {
        passbook[i] = expenditure[i];
    }

    return notiCount;
}

function getMedian(arr) {
    let n = arr.length;
    let median = 0;
    if (n % 2 === 0) {
        let secondNum = n / 2;
        let firstNum = secondNum - 1;
        median = ((arr[firstNum] + arr[secondNum]) / 2).toFixed(1);
    } else {
        median = arr[Math.floor(n / 2)];
    }

    return median;
}

// let expenditure = [10,20,30,40,50];
// let d = 3;
let expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
let d = 5;
// let expenditure = [1, 2, 3, 4, 4];
// let d = 4;
console.log(activityNotifications(expenditure, d));