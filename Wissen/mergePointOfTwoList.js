function findMergeNode(headA, headB) {
    let curr = headA;
    let prev = null;
    let next = null;
}

let headA = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: null
        }
    }
}

let headB = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: null
        }
    }
}

findMergeNode(headA,headB)