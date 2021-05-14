let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// let matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
let n = 4;
function rotateBy90(matrix, n) {
  for (let x = 0; x < Math.floor(n / 2); x++) {
    for (let y = x; y < n - x - 1; y++) {
      let temp = matrix[x][y];
      // move value from right to top
      matrix[x][y] = matrix[y][n - 1 - x];
      //move value from bottom to right
      matrix[y][n - 1 - x] = matrix[n - 1 - x][n - 1 - y];
      // move value from left to bottom
      matrix[n - 1 - x][n - 1 - y] = matrix[n - 1 - y][x]; 
      // Assign temp to left
      matrix[n - 1 - y][x] = temp;
    }
  }

  return matrix;
}

let rotatedMat = rotateBy90(matrix, n);
console.log(rotatedMat);
