let arr = [1,2,3,4,5,6];

let multipleIterator = 0;
let sinlgeIterator = 0;

while(sinlgeIterator <= arr.length - 1) {
    if(multipleIterator === arr.length - 1) {
        multipleIterator = sinlgeIterator++;
        sinlgeIterator++;
    } else {
        multipleIterator++;
    }
}