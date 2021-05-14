function countingValleys(steps, path) {
    // Write your code here
    let numberOfValleys = 0;
    let currLevel = 0;

    for(let i = 0; i < path.length; i++){
        let step = path[i];
        if(step === 'U') currLevel++;
        if(step === 'D') currLevel--;

        if(currLevel === 0 && step === 'U') {
            numberOfValleys++;
        }
    }

    return numberOfValleys;
}

let steps = 6;
let path = 'DUUUDD';

console.log(countingValleys(steps,path));