
var darthVader = {};


darthVader.allegiance = 'Empire';
darthVader.weapon = 'lightsabre';
darthVader.sith = true;
darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];

for (var key in darthVader) {
    if (darthVader.hasOwnProperty(key)) {
      console.log(key + ': ' + darthVader[key]);
    }
}

darthVader.allegiance = "The light side";
delete darthVader.children;
let {allegiance, weapon, sith, childNames} = darthVader;

for (var key in darthVader) {
    if (darthVader.hasOwnProperty(key)) {
      console.log(key + ': ' + darthVader[key]);
    }
}




// console.log(Object.keys(darthVader).length);
