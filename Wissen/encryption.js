function encryption(s) {
    // Write your code here
    let strNoSpace = s.replace(/\s/g, "");
    let strLength = strNoSpace.length;
    let rows = Math.floor(Math.sqrt(strLength));
    let colums = Math.ceil(Math.sqrt(strLength));
    let mul = rows * colums;
    let arr2D = [];
    let strResult = '';
    
    if(mul < strLength) {
        if(rows < colums) {
            rows = rows + 1;
        } else {
            colums = colums + 1;
        }

        mul = rows * colums
    }

    if (mul >= strLength) {
        for (let i = 0; i < rows; i++) {
            let arr = [];
            for (let j = (i * colums); j < ((i + 1) * colums); j++) {
                if(strNoSpace[j]) {
                    arr.push(strNoSpace[j]);
                }
            }
            arr2D.push(arr);
        }
    }

    for(let i =0 ; i < colums; i++) {
        strResult += getCol(arr2D,i).join('');
        strResult += ' ';
    }

    return strResult;
}

function getCol(matrix, col){
    var column = [];
    for(var i=0; i<matrix.length; i++){
       if(matrix[i][col]) {
           column.push(matrix[i][col]);
       }
    }
    return column; 
}

let s = 'if man was meant to stay on the ground god would have given us roots';
// let s = 'chi';
console.log(encryption(s));