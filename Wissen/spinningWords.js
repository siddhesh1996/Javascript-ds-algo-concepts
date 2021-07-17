// https://www.codewars.com/kata/5264d2b162488dc400000001

const spinningWords = (sentence) => {
    let arrSentence = sentence.split(" ");
    arrSentence = arrSentence.map(word => {
        if (word.length >= 5) {
            return word.split("").reverse().join("");
        } else {
            return word;
        }
    });

    return arrSentence.join(" ")
}

console.log(spinningWords('Hey fellow warriors'));



