function staircase(n) {
    // Write your code here
    let pattern = '';
    for(let i = 1; i <= n; i++) {
        pattern += ' '.repeat(n - i) + '#'.repeat(i);
        pattern += '\n';
    }

    return pattern;
}

let n = 10;
staircase(n);