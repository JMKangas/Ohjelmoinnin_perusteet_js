console.log("Luodaan lista")
var marvel = ["Spider-Man", "Hulk", "Daredevil", "Wolverine", "Captain America"];

console.log(marvel);

console.log("Lisätääm haluttu määrä jäseniä")
marvel.push("Thor");

console.log(marvel);

marvel.unshift("Punisher");

console.log(marvel);

console.log("Poistetaan haluttu määrä jäseniä")
marvel.pop();
marvel.shift();
marvel.shift();  //Poistetaan 3 jäsentä listalta

console.log(marvel);

// Join, concat, slice, reverse, sort, splice

// Join määrittää listan erottelijan
console.log(marvel.join());
console.log(marvel.join(" + "));
console.log(marvel.join(""));

//Array concat yhdistää kaksi listaa

var lista1 = [1, 2, 3, 4];
var lista2 = [5, 6, 7, 8];
console.log(lista1);
console.log(lista2);

var lista3 = lista1.concat(lista2);

console.log(lista3);

//Slice valitsee listalta jäsenet määritellyltä väliltä (esimerkiksi  .slice(2, 4))

console.log(marvel.slice(1, 3));

// Reverse muuttaa listan järjestyksen päinvastaiseksi

console.log(marvel);
console.log(marvel.reverse());

// Sort järjestää listan aakkosjärjestykseen, jos kyseessä on tekstilista

console.log(marvel.sort());

//Splice uudelleen kirjoittaa listan ja sillä pystyy halutessaan jättämään myös listan jäseniä pois.

var spliceMuuttuja = marvel;
spliceMuuttuja.splice(1, 0, "punisher"); //lisätään punisher kolmanneksi jäseneksi, eikä poisteta muita jäseniä

console.log(spliceMuuttuja);

spliceMuuttuja.splice(2, 2, "Luke Gage");

console.log(spliceMuuttuja);
