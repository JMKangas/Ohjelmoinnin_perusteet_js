
let randVar1, randVar2, randResult;

//asetetaan random arvot muuttujille.

randVar1 = Math.random();
randVar2 = Math.random();
randResult = randVar1 + randVar2;

console.log("Tässä on muuttuja randVar1:sen random numero: " + randVar1);
console.log("Tässä on muuttuja randVar2:sen random numero: " + randVar2);
console.log("Tässä on molempien random numeroiden yhteenlaskettu summa: " + randResult);
console.log("Ja tässä sama muuttujan arvo hieman mukavammin luettavassa muodossa: " + randResult.toFixed(2));
