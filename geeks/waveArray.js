let arr = [1,2,3,4,5];
let n = arr.length;

function waveArray(arr,n) {
  let firstIdx = 0;
  let secondIdx = firstIdx + 1;
  let count = 0;

  while(secondIdx < n) {
    if(count % 2 === 0) {
      if(arr[firstIdx] < arr[secondIdx]) {
        swap(arr, firstIdx,secondIdx);
      } 
    }
    firstIdx++;
    secondIdx++
    count++;
  }

  return arr;
}

function swap(arr, i, j) {
 [arr[i],arr[j]] = [arr[j],arr[i]];
}


let waveR = waveArray(arr,n);

console.log(waveR);