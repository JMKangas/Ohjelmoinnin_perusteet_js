
let eka, toka, kolmas, neljas, muokattu, tarina;

eka = prompt("Anna ensimmäinen adjektiivi");
muokattu = eka.charAt(0).toLocaleUpperCase() + eka.slice(1);
toka = prompt("Anna toinen adjektiivi");
kolmas = prompt("Anna kolmas adjektiivi");
neljas = prompt("Anna neljäs adjektiivi");

tarina = muokattu + " ja " + toka.toLocaleLowerCase() + " koodarin vasen silmä oli " + kolmas.toLocaleLowerCase() + " , kun hän yritti etsiä bugia koodista. Päivän fiilis oli " + neljas.toLowerCase();
console.log(tarina);
