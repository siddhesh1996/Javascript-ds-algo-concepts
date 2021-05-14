let name = "Mark";
let user = {
    name: "John",
    hi() { return this.name; }
}

let hi = user.hi;
let userName = hi();

console.log(userName)


const arr = [10,20,30,40];
for(var i = 0; i< arr.length; i++) {
  setTimeout(function() {
    console.log('Index:' + i + ', element' + arr[i]);
  },3000)
}

// var arr = [][];
// console.log(arr);

function test() {
  return new Promise(function(resolve,reject) {
    throw new Error('Whooops');
  })
  .catch(function(err) {
    console.log('Error Detected')
  })
  .then(function() {
    console.log('Next...')
  })
}

test().then(function() {
  console.log('sjds');
})

function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

function test() {
  console.log('Zero Arguments');
}
function test(a) {
  console.log(a);
  
}
function test(a,b) {
  console.log(a,b);
}

test();
test(1);
test(1,2);
test(1,2,3,4);


var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    (function() {
      console.log(this.foo);
      console.log(self.foo);
    })()
  }
}

myObject.func();


let arr = [1,2,3,4,5,6];

arr.forEach((num) => {
  console.log(num);
  if(num === 4) {
    break;
  }
})

var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);

Promise.resolve(1)
.then(x => x + 1)
.then(x => {throw new Error('My error')})
.catch(() => 1)
.then(x => x + 1)
.then(x => console.log(x))
.catch(console.error);

let arr =  [1,2,3,4];
delete arr[3];
console.log(arr.length,arr);
console.log(typeof null === 'object');

(function() {
  var objA = {
    foo: 'foo',
    bar: 'bar'
  };
  var objB = {
    foo: 'foo',
    bar: 'bar'
  };
  console.log(objA == objB);
  console.log(objA === objB);
}())


const a = ""-1 + 0;
const b = true + false;
console.log(a/b);


var a = 2;
(function(global) {
var a = 3;
console.log(a);
console.log(global.a)
})(window)

try { 
  undefined()
  } catch(err) {
  console.log(err)
}
console.log(err);

var a = false;
if(a) {
  function foo() { console.log('b'); }
  } else {
  function foo() { console.log('a') }
  }
foo();

for(let i = 0; i <= 5 ; i++) {
  setTimeout(function timer() {
  console.log(i);
  },i* 1000)
}

console.log("" == 0,false == 0, undefined == "",undefined == null);

console.log('1' == 1,'1'=== 1,Number(01) === 1);

const a = {o: 1};// a.o = 2;// console.log(a);

let x = 'outer value';
(function() {
console.log(x);
let x = 'inner value';
}())

function f() {
  console.log(arguments);
}
f([1,2]);
f(1,2);
f.apply(null,[1,2]);
f.call(null,1,2);

const counter = function(ini,step) {
  var c = ini || 0;
  return function next() {
    c = c + step;
    return c;
    }
}
const c1 = counter(1,1);
console.log(c1(),c1());

const counter = function(ini,step) {
  return {
  val: ini,
  next() {
  this.val = this.val + step;
  return this.val
  }
}
}

const c = counter(0,2);
console.log(c.val,c.next(),c.val);

var obj = {
  val: 0,
  inc() {
    this.val++
    console.log(this.val);
    }
    }
var inc = obj.inc;
inc();
inc.call(obj);
obj.inc();
var obj2 = { val: 2 }
var inc2 = inc.bind(obj2);
inc2();

function A() {
}
function B(val) {
  this.valB = val;
}

B.prototype = Object.create(A.prototype);
var b = new B(2);
console.log(b.valB);  // 2
console.log(b.val);  // undefined
A.prototype.val = 1; 
console.log(b.val); // 1

function A(id) {
  this.id = id;
}
A.fn = function() {
  console.log('in A.fn',this.id);
}
A.id = 'class A';
A.prototype.fn = function() {
  console.log('in A.prototype.fn',this.id)
}
var a = new A('object a');
a.fn(); 
A.fn();

const defaultVal = () => 1;
const required = arg => {throw Error(`Argument ${arg} is required`)}
const fn = ({a = defaultVal(),b = required('b')}) => {
  console.log('a,b =',a,b); 
  // 1 b
  // a b
  // Argument b is required

}
try {
  [{b: 'b'},{a: 'a',b: 'b'},{a: 'a',b: undefined}].map(fn);
} catch(err) {
  console.log(err.message);
}

const a = [1,2,3];
const [one,...rem] = a;
const [first,,,fourth] = a;
// console.log(one,first,fourth,rem);
console.log(one === 1, rem.every((i,j) => i == j+2),first === 1, fourth ===2);


const a = {
  one: '1.0',
  two: '2.0',
  three: '3.0'
}
const {one,...rem} = a;
const all = {...a};
console.log(one === '1.0',rem === undefined,rem.three === '3.0',all.one === a.one);

const div = ([x,y]) => {
  if(y) {
    return [Math.floor(x/y),x % y]
  }
  throw new Error('Divison by 0 not allowed');
}

const div_p = (x,y) => Promise.resolve([x,y])
.then(div)
.catch(err => ['err','err'])
.then(([q,r]) => [`quotient=${q}`,`reminder=${r}`])
.finally(() => [1,2])

div_p(1,'0').then(r => console.log(r)); 
div_p(1,0).then(r => console.log(r));
div_p(2,1).then(r => console.log(r));
div_p(1,2).then(r => console.log(r));

import main from './binarySequence';
console.log(main('sfds'));

const array1 = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

var x = [1,2,3,4,5];
x.length = 0
console.log(x);