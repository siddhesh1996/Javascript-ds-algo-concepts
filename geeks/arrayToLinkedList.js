var arr = [1,2,3];

function List(val){
  this.val = val;
  this.child = null;
}

function creatList(a){
  let node, temp;
  for(let i=a.length-1; i >= 0; i--){
    if(!node) {
        node = { value: a[i] };
      }
      else {
        temp = { value: a[i] };
        temp.child = node;
        node = temp;
      }
  }
  return node;
}

let list = creatList(arr);

// AccountId AccountBalance EquityABalance

