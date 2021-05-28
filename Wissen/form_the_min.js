function minValue(values) {
    return parseInt([...(new Set(values))].sort().join(''))
}

let values = [1, 9, 3, 1, 7, 4, 6, 6, 7]
console.log(minValue(values))