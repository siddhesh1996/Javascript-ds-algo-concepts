function dirReduc(arr) {
    return arr.reduce((prev, curr) => {
        if ((prev[prev.length - 1] === 'NORTH' && curr === 'SOUTH') || (prev[prev.length - 1] === 'SOUTH' && curr === 'NORTH') || (prev[prev.length - 1] === 'EAST' && curr === 'WEST') || (prev[prev.length - 1] === 'WEST' && curr === 'EAST')) {
            prev.splice(prev.length - 1, 1)
            return prev;
        } else {
            return [...prev, curr];
        }
    }, [])
}

let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

console.log(dirReduc(arr))