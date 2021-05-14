let arr  = [0,2,1,2,0,2,2,2,2,2,0];

function sort012(array,n) {
  let low = 0;
  let mid = 0;
  let high = n - 1;

  while(mid <= high) {
    if(array[mid] === 0) {
      [array[mid],array[low]] = [array[low],array[mid]]
      mid++;
      low++;
    } else if(array[mid] === 1) {
      mid++;
    } else {
      [array[mid],array[high]] = [array[high],array[mid]]
      high--;
    }
  }
  return array;
}

let sorted = sort012(arr,arr.length);

console.log(sorted);