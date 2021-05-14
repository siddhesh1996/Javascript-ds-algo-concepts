// let mainObj = {
//   firstName: 'Sid',
//   lastName: 'Kasar',
//   getName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// function getUserName() {
//   return this.getName();
// }

// let newGetFn = getUserName.bind(mainObj);

// console.log(newGetFn());
// let self = this;
// // self.name = 'sid';
// const fnArrow = () => {
// }

// fnArrow();

// let obj = {
//   name: 'exp',
//   method1: () => {
//     console.log(this);
//   },
//   method2: function() {
//     let self = this;
//     let newMethod = this.method1.bind(self);
//     newMethod();
//   }
// }

// obj.method2();

// var obj = {
//   count : 10,
//   doSomethingLater : function (){
//       setTimeout(() => {
//         console.log(this);
//           this.count++;
//           console.log(this.count);
//       }, 300);
//   }
// }

// obj.doSomethingLater();

// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let iterationCount = 0;
//   for (let i = start; i < end; i += step) {
//       iterationCount++;
//       yield i;
//   }
//   return iterationCount;
// }

// makeRangeIterator(0,10,1);

let symbol = Symbol();

console.log(typeof symbol);