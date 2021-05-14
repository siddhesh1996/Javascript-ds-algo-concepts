
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processData(input) {
    //Enter your code here
    console.log(input.split('\n'));
} 

_input = "";
rl.on('line', (input) => {
    _input += input;
});

rl.on('close', () => {
    processData(_input);
});
