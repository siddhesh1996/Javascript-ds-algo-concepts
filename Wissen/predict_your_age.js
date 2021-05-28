function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let ages = [age1, age2, age3, age4, age5, age6, age7, age8];
    return Math.floor((Math.sqrt(ages.map(age => age * age).reduce((prev, curr) => prev + curr, 0))) / 2)
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))