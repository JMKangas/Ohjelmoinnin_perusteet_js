
let sade, pintaAla, ekaSana, tokaSana, lista;

sade = prompt("Anna ympyrän säde");

function calcCircleRect(sade){
    return Math.PI * sade * sade;
}
pintaAla = calcCircleRect(sade);

console.log(pintaAla.toFixed(0));
alert("Ympyrän pinta-ala on " + pintaAla.toFixed(0));

ekaSana = prompt("Anna ensimmäinen sana");
tokaSana = prompt("Anna toinen sana");

lista = [ekaSana, tokaSana];
lista.sort();
lista.pop();

console.log(lista);
alert("Aakkosjärjestyksessä ensimmäinen sana oli: " + lista);
