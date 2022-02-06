
let arvaus, vastaus, arvasikoKauttajaOikein;

function arvausKysely(arvattavaLuku) {

    arvasikoKauttajaOikein = false;
    arvaus = 1;

    while(arvaus !== 0) {
        arvaus = Number(prompt("Arvaappa luku mitä mietin!"));

        if (arvaus < arvattavaLuku) {
            alert("Antamasi luku oli pienempi kuin arvattava luku");
        }
        else if (arvaus > arvattavaLuku) {
            alert("Antamasi luku oli suurempi kuin arvattava luku");
        }
        else if(arvaus == arvattavaLuku) {
            alert("Arvasit oikein!");
            arvasikoKauttajaOikein = true;
            return arvasikoKauttajaOikein;
        }

    }
}

const arvauksenTulos = arvausKysely(40);
alert(arvauksenTulos);
