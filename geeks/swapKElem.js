let arr = [1,2,3,4,5,6];
let k = 5;

function swapK(arr,k) {
  [arr[k - 1],arr[arr.length - k]] = [arr[arr.length - k],arr[k - 1]]
  return arr;
}

console.log(swapK(arr,k))