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

function deleteAlt(head) {
  if(head == null) {
    return;
  }
  let prev = head;
  let now = head.next;

  while(prev != null && now != null) {
    prev.next = now.next;

    now = null;

    prev = prev.next;
    if(prev != null) {
      now = prev.next
    }
  }

  return head;
}

let altLinkedList = deleteAlt(linkedList);

console.log(altLinkedList);