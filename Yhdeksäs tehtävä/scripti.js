
let ekaVastaus, tokaVastaus, kolmasVastaus, pisteet;

pisteet = 0;

ekaVastaus = prompt("Paljonko on 5 + 10?");
if (ekaVastaus == 15){
    alert("Oikein meni! Siirry seuraavaan kysymykseen.")
    pisteet += 1;
} else {
    alert("Väärin! 5 + 10 = 15. Siirry seuraavaan kysymykseen tai peruskouluun.")
}

tokaVastaus = prompt("Kuinka paljon on 10 / 5?");
if (tokaVastaus == 2 && pisteet == 1) {
    alert("Oikein meni! Sinulla on putki päällä! Siirry seuraavaan kysymykseen.")
    pisteet += 1;
} else if (tokaVastaus == 2) {
    alert("Ensimmäinen oikea vastaus! Siirry seuraavaan kysymykseen.")
    pisteet += 1;
} else {
    alert("Väärin meni. 10 / 5 = 2. Ala-aste kutsuu.")
}

kolmasVastaus = prompt("Kuinka paljon on (π)Pi:n kolme(3) ensimmäistä desimaalia jaettuna kolmella(3)?")
if (kolmasVastaus == 47 && pisteet == 2) {
    alert("Hienoa! Sait kaikki oikein!")
    pisteet += 1;
} else if (kolmasVastaus == 47) {
    alert("Oikein meni!")
    pisteet += 1;
} else {
    alert("Väärin. Takaisin koulun penkille!")
}

if (pisteet != 3) {
    alert("Emme voi myöntää sinulle päättötodistusta Lapin AMK:sta. Sait " + pisteet + "/3 oikein.")
} else if (pisteet == 3) {
    alert("Onneksi olkoon! Saat Lapin AMK:n päättötodistuksen täysillä " + pisteet + "/3 pisteillä!")
}

alert("kolme = merkkiä tarkoittaa, että tarkastellaan onko kaksi operaattoria TÄSMÄLLEEN samanlaisia. '1' == 1 on true kun taas '1' === 1 on false, koska toinen tekstiä, eikä numero.");
