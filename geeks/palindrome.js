let s = 'abba'; 

function palindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(palindrome(s));