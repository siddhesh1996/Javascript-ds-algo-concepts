/*
 * Complete the 'gridSearch' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY G
 *  2. STRING_ARRAY P
 */

function gridSearch(G, P) {
    // Write your code here
    let pRows = P.length;
    let pColumns = P[0].length;
    let gRows = G.length;
    let gColumns = G[0].length;

    for (let i = 0; i < pRows; i++) {
        for (let j = 0; j < pColumns; j++) {
            
        }
    }
    console.log('pr*pc', pRows, pColumns, 'gr*gc', gRows, gColumns)
}

let G = [
    [7, 2, 8, 3, 4, 5, 5, 8, 6, 4],
    [6, 7, 3, 1, 1, 5, 8, 6, 1, 9],
    [8, 9, 8, 8, 2, 4, 2, 6, 4, 3],
    [3, 8, 3, 0, 5, 8, 9, 3, 2, 4],
    [2, 2, 2, 9, 5, 0, 5, 8, 1, 3],
    [5, 6, 3, 3, 8, 4, 5, 3, 7, 4],
    [6, 4, 7, 3, 5, 3, 0, 2, 9, 3],
    [7, 0, 5, 3, 1, 0, 6, 6, 0, 1],
    [0, 8, 3, 4, 2, 8, 2, 9, 5, 6],
    [4, 6, 0, 7, 9, 2, 4, 1, 3, 7],
]
let P = [
    [9, 5, 0, 5],
    [3, 8, 4, 5],
    [3, 5, 3, 0],
]
gridSearch(G, P)