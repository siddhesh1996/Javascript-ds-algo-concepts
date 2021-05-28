var number = function(array) {
    if (!array.length) {
        return array
    }
    let result = [];
    for (let props in array) {
        result[props] = `${+props + 1}: ${array[props]}`
    }

    return result;
}
let array = ["a", "b", "c"]
console.log(number(array))