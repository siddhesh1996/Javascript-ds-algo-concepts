function getMax(operations) {
    // Write your code here
    let stack = [];
    let result = [];
    for(let i = 0; i < operations.length; i++) {
        let operation = operations[i];
        if(operation.length > 1) {
            let num = operation.substring(2,operation.length);
            stack.unshift(+num);
        } else {
            if(operation === '2') {
                stack.shift(0);
            } else if(operation === '3') {
                let max = Math.max(...stack);
                result.push(max);
            }
        }
    }
    
    return result;
}

let operations = ['1 97', '2', '1 20', '2', '1 26','1 20','2','3','1 91','3'];

console.log(getMax(operations));