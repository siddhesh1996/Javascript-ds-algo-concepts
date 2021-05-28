var greet = function(name) {
    return `Hello ${name.substring(0,1).toUpperCase()}${name.substring(1,name.length).toLowerCase()}!`
};

let nameu = 'JACK';
console.log(greet(nameu))