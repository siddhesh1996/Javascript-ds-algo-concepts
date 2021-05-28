function createPhoneNumber(numbers) {
    // Solution 1
    // numbers.splice(0, 0, '(')
    // numbers.splice(4, 0, ')')
    // numbers.splice(5, 0, ' ')
    // numbers.splice(9, 0, '-')
    // return numbers.join('')

    // Solution 2
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(createPhoneNumber(numbers))