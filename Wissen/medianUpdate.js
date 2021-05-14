function processData(input) {
    //Enter your code here
    let mem = [];
    for (let i = 0; i < input.length; i++) {
        let t = input[i].split(" ");

        if(t[0] === 'r') {
            if(mem.lastIndexOf(+t[1]) > -1) {
                mem.splice(mem.lastIndexOf(+t[1]),1);
                let n = mem.length;
                mem = mem.sort((a,b) => a - b);

                if(n > 0) {
                    if(n % 2 === 0) {
                        let seconNum = n/2;
                        let firstNum = seconNum - 1;
                        let median = ((mem[firstNum] + mem[seconNum])/2).toFixed(1);
                        console.log(median);
                    } else {
                        let middleIdx = Math.floor(n/2);
                        let median = mem[middleIdx];
                        console.log(median);
                    }
                } else {
                    console.log('Wrong!');
                }
            } else {
                console.log('Wrong!');
            }
        } else if(t[0] === 'a') {
            mem.push(+t[1]);
            let n = mem.length;
            mem = mem.sort((a,b) => a - b);
            
            if(n % 2 === 0) {
                let seconNum = n/2;
                let firstNum = seconNum - 1;
                let median = ((mem[firstNum] + mem[seconNum])/2).toFixed(1);
                console.log(median);
            } else {
                let middleIdx = Math.floor(n/2);
                let median = mem[middleIdx];
                console.log(median);
            }
        }

        console.log(mem);
    }
}

let input = ['r 1', 'a 1', 'a 2', 'a 1', 'r 1', 'r 2', 'r 1'];
processData(input);