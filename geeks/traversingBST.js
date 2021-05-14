let postBt = {
  data: 1,
  left: {data: 2, left: {data: 4, left: null, right: null}, right: {data: 5, left: null, right: null}},
  right: {data: 3,left: null, right: null}
}

let preBt = {
  data: 1,
  left: {data: 2, left: {data: 4, left: null, right: null}, right: {data: 5, left: null, right: null}},
  right: {data: 3,left: null, right: null}
}

let inBt = {
  data: 1,
  left: {data: 2, left: {data: 4, left: null, right: null}, right: {data: 5, left: null, right: null}},
  right: {data: 3,left: null, right: null}
}

let levelBt = {
  data: 1,
  left: {data: 2, left: {data: 4, left: null, right: null}, right: {data: 5, left: null, right: null}},
  right: {data: 3,left: null, right: null}
}

function postOrder(root) {
  if(root == null) return;
  else {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data,'post');
  }
} 

function preOrder(root) {
  if(root == null) return;
  else {
    console.log(root.data, 'pre');
    preOrder(root.left);
    preOrder(root.right);
  }
}

function inOrder(root) {
  if(root == null) return;
  else {
    inOrder(root.left);
    console.log(root.data,'in');
    inOrder(root.right);
  }
}

// function levelOrder(root) {
//   if(root == null) return;
//   else {
//     console.log(root.data,'in');
//     levelOrder(root.left);
//     inOrder(root.right);
//   }
// }

let postArr = postOrder(postBt);

let preArr = preOrder(preBt);

let inArr = inOrder(inBt);
