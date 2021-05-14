let arr = [-1,-2,-3,-4];

function KadensAlgo(array) {
  let maxNoEnding = array[0];
  let maxSoFar = array[0];
  
  for(let i = 1; i < array.length; i++) {
    maxNoEnding = Math.max(maxNoEnding + array[i], array[i]);
    maxSoFar = Math.max(maxSoFar, maxNoEnding);
  }

  return maxSoFar;
}

let kaden = KadensAlgo(arr);

console.log(kaden);