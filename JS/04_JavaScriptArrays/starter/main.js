quote = ["I", "am", "your", "friend"];

console.log(quote[1]);

console.log(quote.pop(0));
console.log(quote);

console.log(quote.push("father"));
console.log(quote);

console.log(quote.unshift("Luke"));
console.log(quote);

erroneousWord = "Luke"
let lukeIsHere = quote.find(n => {
    return n === erroneousWord
});


if (lukeIsHere) {
    let lukeIsAt = quote.findIndex(n => {
        return n === erroneousWord
    });
    quote[lukeIsAt] = "No";
}


for (let i=0, j=quote.length; i<j; i++) {
    if (i === j -1) {
        output += quote[i] + '!';
    }
    else if (quote[i] === 'No'){
        output += quote[i] + ', ';
    }
    else {
        output += quote[i] + ' '
    }
}


