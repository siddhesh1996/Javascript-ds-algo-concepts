let linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  let next = null;

  while(curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  head = prev;
  return head;
}

console.log(reverseList(linkedList))