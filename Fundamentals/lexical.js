// function count() {
//   let count = 0;
//   return function() {
//     return function() {
//       return count++;
//     }
//   }
// }

// let counter = count()();
// console.log({counter})
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }

// let total = sum(5)(-1);
// console.log(total);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let range = inBetween(3,6);
// let filtered = arr.filter(range);

// function inBetween(a,b) {
//   return function(x) {
//     return x >= a && x <= b;
//   }
// }

// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   }
// }

// console.log(filtered);


// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(prop) {
//   return function (a,b) {
//     return a[prop] > b[prop] ? 1 : -1
//   }
// }

// let sortedByName = users;
// sortedByName.sort(byField('name'))
// // let sortedByAge = users.sort(byField('age'));
// console.log(sortedByName,users);
// console.log(sortedByAge);

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i; // create a shooter function,
    let shooter = function() {
      return j ; // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

console.log(army[5]());

console.log(globalThis);

console.log(makeArmy.toString());


let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

new Date().getD