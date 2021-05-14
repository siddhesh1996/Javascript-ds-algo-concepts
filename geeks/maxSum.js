let n = 56;

function MaxNo(n) {
  if(n === 0 || n === 1) {
    return n
  } else {
    return Math.max((MaxNo(Math.floor(n/2)) + MaxNo(Math.floor(n/3)) + MaxNo(Math.floor(n/4))),n);
  }
}

console.log(MaxNo(n));