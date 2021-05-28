function persistence(num, count = 0) {
    //code me
    if (num.toString().length === 1) {
        return count
    }

    return persistence(eval(num.toString().split('').join('*')), count + 1)

}

let num = 25;
console.log(persistence(num))