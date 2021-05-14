console.log(credit_debit(1)(2)(3)(5)(4)(-1)) // 1 - 2 + 3 - 5 + 4 // 1

function credit_debit(a) {
  return function(b) {
    return b !== -1 ? credit_debit(a + b) : a;
  }
}

