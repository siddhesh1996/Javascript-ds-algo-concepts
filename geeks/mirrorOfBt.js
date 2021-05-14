let bt = {
  data: 1,
  left: {data: 2, left: null, right: null},
  right: {data: 3,left: null, right: null}
}

function mirror(bt) {
  if(bt === null) {
    return;
  } else {
    let temp;
    mirror(bt.left);
    mirror(bt.right);

    temp = bt.left;
    bt.left = bt.right;
    bt.right = temp;
    
    return bt;
  }
}

let mirrorR = mirror(bt);

console.log(mirrorR);