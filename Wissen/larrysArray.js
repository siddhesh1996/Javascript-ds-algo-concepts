function larrysArray(A) {
    // Write your code here
    let inv = 0;
    let n = A.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; ++j) {
            inv += A[i] > A[j] ? 1 : 0;
            inv %= 2;
        }
    }
    if (!inv) return 'YES';
    return 'NO';
}

let A = [6, 5, 4, 3, 2];

console.log(larrysArray(A));