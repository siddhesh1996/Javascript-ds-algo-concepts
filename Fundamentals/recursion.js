function pow(x,n) {
  if(n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

// console.log(pow(2,3));

let linkedList = {
  value: 8,
  next: {
    value: 9,
    next: {
      value: 10,
      next: {
        value: 11,
        next: null
      }
    }
  }
}

linkedList = { value: 7, next: linkedList }
// linkedList.next = linkedList.next.next;
// console.log(linkedList);

//recursion
var t0 = new Date().getTime();
function sumTo(n) {
  if(n === 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}
var t1 = new Date().getTime();
console.log(t1,t0);
//Formula
function sumToF(n) {
  for(let i = 1; i <= n; i ++) {
    if(i == 1) {
      return n * (i + n)/2
    }
  }
}
console.log(sumTo(10000));