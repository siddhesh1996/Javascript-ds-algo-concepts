let a = [4, 6, 5, 3, 3, 1];

function pickingNumbers(a) {
    // Write your code here
    let firstIdx = 0;
    let secondIdx = firstIdx + 1;
    let maxLength = 0;
    let subArrayPlus = [];
    let subArrayMinus = [];

    while (firstIdx < a.length) {
        let num = a[firstIdx];
        subArrayPlus.push(num);
        subArrayMinus.push(num);

        for (let i = secondIdx; i < a.length; i++) {
            if (num === a[i] || num + 1 === a[i]) {
                subArrayPlus.push(a[i]);
            }
        }

        for (let i = secondIdx; i < a.length; i++) {
            if (num === a[i] || num - 1 === a[i]) {
                subArrayMinus.push(a[i]);
            }
        }
        if (maxLength < Math.max(subArrayPlus.length, subArrayMinus.length)) {
            maxLength = Math.max(subArrayPlus.length, subArrayMinus.length);
        }

        firstIdx++;
        secondIdx = firstIdx + 1;
        subArrayPlus.length = 0;
        subArrayMinus.length = 0;
    }
    
    return maxLength;
}


pickingNumbers(a);