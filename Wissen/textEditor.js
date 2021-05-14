let input = ['1 abcde','1 fg', '3 6', '2 5', '4', '3 7', '4', '3 4'];
// let input = ['1 abc', '3 3', '2 3','1 xy','3 2','4','4','3 1'];
// function processData(input) {
//     //Enter your code here
//     let currState = ''; //abc
//     let mem = []; 
//     let resultStr = '';

//     for(let i = 0; i < input.length; i++) {
//         let cmd = input[i];
//         let op = cmd[0];

//         if(+op === 1) {
//             mem.push(`2 ${cmd.substring(2).length}`);
//             currState += cmd.substring(2);
//         } else if(+op === 2) {
//             let x = cmd.substring(2);
//             let n = currState.length;
//             let y = n - x;
//             mem.push(`1 ${currState.substring(y)}`);
//             currState = currState.substring(0,y);
//         } else if(+op === 3) {
//             let x = cmd.substring(2);
//             resultStr += `${currState[x - 1]}\n`;
//         } else if(+op === 4) {
//             let lastIdx = mem[mem.length - 1];
//             let undoOp = lastIdx[0];
            
//             if(+undoOp === 1) {
//                 currState += lastIdx.substring(2);
//             } else if(+undoOp === 2) {
//                 let x = lastIdx[lastIdx.length - 1];
//                 let n = currState.length;
//                 let y = n - x;
//                 currState = currState.substring(0,y);
//             }

//             mem.pop();
//         }
//     }

//     mem.length = 0;

//     return resultStr;
// } 


function processData(input) {
    let stack = [];
    let string = "";

    for(let i = 0; i < input.length; i++) {
        let t = input[i].split(" ");

        if(+t[0] === 1) {
            stack.push(string);
            string += t[1]
        } else if(+t[0] === 2) {
            stack.push(string);
            string = string.substring(0,string.length - +t[1]);
        } else if(+t[0] === 3) {
            console.log(string[+t[1] - 1]);
        } else {
            string = stack.pop();
        }
    }
}

processData(input)