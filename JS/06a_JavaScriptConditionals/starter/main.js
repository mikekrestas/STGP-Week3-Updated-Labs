let age = 75;

if (age <= 17) {
    console.log("Underage");
}

else if (age <= 65) {
    console.log("Insurable");
}

else {
    console.log("Out of range");
}


// ternary results

let age_t = 40;
let result = (age_t <= 17) ? "Underage" : (age <= 65) ? "Insurable" : "Out of range";
console.log(result);