let A = [4,2,10,5,9];
let B = [4,5,6,15];
let M = 5;
let N = 4;
let X = 5;

function isMatchX(M,N,X,A,B) {
  let sortA = A.sort((a,b) => a - b);
  let sortB = B.sort((a,b) => a - b);
  let i = 0;
  let j = 0;
  let sortC = [];
  while(i < M && j < N) {
    if(sortC.length) {
      while(sortC[sortC.length - 1] < sortB[j]) {
        sortC.push(sortB[j]);
        j = j + 1
      }
      while(sortC[sortC.length - 1] < sortA[i]) {
        sortC.push(sortA(i));
        i = i + 1
      }
    } else {
      sortC.push(sortA[i]);
      i = i + 1;
    }
  }
  console.log(sortC);
}

isMatchX(M,N,X,A,B);