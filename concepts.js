import { compose } from "async";

// function counter () {
//     var count = 0;
//     console.log('outer count',count);
//     return function() {
//         return console.log(count++);
//     }
// }

// var a = counter();

// a();
// a();
// a();
// a();



// class Fix {
//     Fixtures = [1,2,3,4,5,6,7,8];

//     getMatchDayPoints = (id) => {
//         console.log(id,'Match Day points');
//     }
    
//     Fixtures.map((fixture,id) => {
//         console.log(id,fixture);
//         this.getMatchDayPoints(id);
//     })

//     matchDayPoints = [
//         {TeamId: 1},
//         {TeamId: 2},
//         {TeamId: 3}
//     ]
    
//     console.log(matchDayPoints[0].TeamId);
// }


// let one = [1,2,3,4,5,6,7,8,9,10];
// let two = [9,10];

// function getMatchNumber() {
//     return one.map((j,i) => {
//         let str;
//         two.map((k,l) => {
//             if(j == k) {
//                 str = k;
//                 return console.log(str,'strrerturn');
//             }
//         })
//     });
// }

// getMatchNumber();

// console.log(mapping);

// const memoize = func => {
//     const result = {};
//     return (...args) => {
//         const argsKey = JSON.stringify(args);
//         if(!result[argsKey]) {
//             result[argsKey] = func(...args);
//         }
//         return result[argsKey];
//     }
// }

// const inefficientSquare = memoize(num => {
//     let total = 0;
//     for(let i=0; i < num; i++) {
//         for(let j = 0; j < num; j++) {
//             total++;
//         }
//     }
//     return total;
// })

// let start = new Date();
// inefficientSquare(40000);
// let end = new Date();
// console.log(end - start,'first');

// start = new Date();
// inefficientSquare(40000);
// end = new Date();
// console.log(end - start,'second');

// start = new Date();
// inefficientSquare(4000);
// end = new Date();
// console.log(end - start,'third');

// start = new Date();
// inefficientSquare(4000);
// end = new Date();
// console.log(end - start,'fourth');

// const sequnceAdding = memoize(num => {
//     let total = 0;
//     for(let i = 1; i <= num; i++) {
//         total += i;
//     }
//     return console.log(total);
// })

// let start = new Date().getTime();
// sequnceAdding(40000);
// let end = new Date().getTime();
// console.log(end - start,'first');

// start = new Date();
// sequnceAdding(4000);
// end = new Date();
// console.log(end - start,'first');

// start = new Date().getTime();
// sequnceAdding(40000);
// end = new Date().getTime();
// console.log(end - start,'second');

// start = new Date();
// sequnceAdding(4000);
// end = new Date();
// console.log(end - start,'first');


// function* generate(n) {
//     for(let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const gene = generate(10);

// for(let i = 0; i <= 5; i++) {
//     if(gene.next().value <= i) {
//         console.log(gene.next());
//     }
// }

// function sqrFormula(x,y) {
//   return (x*x) + (y*y) - (2*x*y);
// }

// function mesureDistance(x1,x2,y1,y2) {
//   let sqrOfx = sqrFormula(x1,x2);
//   let sqrOfy = sqrFormula(y1,y2);
//   let distance = Math.sqrt(sqrOfx + sqrOfy);
//   return distance;
// }

// let distance = mesureDistance(1,1,1,7);
// console.log(distance,'distance');

// function outer() {
//   let a = 0;
//   function inner() {
//     let b = 0;
//     b++;
//     a++;
//     console.log(a,b);
//   }

//   return inner;
// }

// let X = outer();
// let Y = outer();

// console.log(X()); 
// console.log(X()); 
// console.log(X()); 
// console.log(Y());

// let email = "ksiddhesh96.sk@gmail.com"

// function identifyString(str) {
//   let splittedStr = str.split('@')[1];
//   let regex = /[^a-zA-Z0-9-.]/g;
//   let sanitizedString = false;
//   if(regex.test(splittedStr)) {
//     sanitizedString = true;
//   }
//   return sanitizedString;
// }

// identifyString(email);


// let add = memoize((num) => {
//   return (snum) => {
//     return (tnum) => {
//       return console.log(num + snum + tnum);
//     }
//   }
// });

// let start = new Date();
// add(1000000)(1000000909809809890)(1000000909809809890);     AbortController   
// let end = new Date();
// console.log(end - start,'first');

// start = new Date();
// add(1000000)(1000000909809809890)(1000000909809809890);
// end = new Date();
// console.log(end - start,'first');

// let of = ['root','inject','ddxx'];

// const [root,inject,dx] = of;

// console.log(root);
// console.log(inject);
// console.log(dx);



// let sorted = [1,2,2,4,5];
// let dumArr = []
// arr.push

// let number = 2;
 
// if(number/2) {

// } else {

// }