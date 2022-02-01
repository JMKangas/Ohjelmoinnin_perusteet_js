let lista, jasen, pituus, kysymys, lista2;


lista = ["apina", "kOiRa", "kiSSa", "hiiri", "goriLLa", "sIIka kaks kiloo", "hauki", "on", "kala", "eIkö"];
pituus = lista.length;

for (jasen = 0 ; jasen < pituus; jasen++) {
    
    var objekti = lista[jasen].toUpperCase()
    //muokattu = objekti.charAt(0).toLocaleUpperCase() + objekti.slice(1);

    console.log(objekti);
}

kysymys = prompt("Saanko kurssista arvosanan 5?");

while (true) {
    if (kysymys == "Kyllä" | kysymys == "kyllä") {
        alert("Kiitoksia arvosanasta!")
        break
    } else {
        kysymys = prompt("Saanko kurssista arvosanan 5?")
    }
}

function summaArray(arraylista) {
    let objekti = 0
    for (let i = 0 ; i < arraylista.length ; i++) {
         objekti += arraylista[i]      
    }
    return objekti;
}
console.log("Summaksi tulee: " + summaArray([1, 2, 3, 4]));
