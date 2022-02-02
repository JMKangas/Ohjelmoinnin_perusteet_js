//Numero
var a = 3;
console.log(typeof a);

//teksti
var teksti = "tekstiä";
console.log(typeof teksti);

//Boolean
console.log(typeof true);
console.log(typeof false);

//Undefined
var c;
console.log(typeof c);

//Null
var meetvursti = null;
console.log(typeof meetvursti);

//Objekti
var d = {};
console.log(typeof d);

//NaN Not an Number
var nan = undefined;
var f = 3;
console.log(nan + f);
console.log(isNaN(nan));
console.log(isNaN(f));
console.log(!isNaN(nan));

//Laskutoimituksia tekstillä
var muuttuja1 = "3";
var muuttuja2 = 2;

console.log(muuttuja1 + muuttuja2);
console.log(muuttuja2 * muuttuja1);

//Truthy ja Falsy

//Falsy
WhoAreYou( false );
WhoAreYou( true );
WhoAreYou( 0 );
WhoAreYou( "" );
WhoAreYou( '' );
WhoAreYou( null );
WhoAreYou( undefined );
WhoAreYou( NaN );
//Truthy
WhoAreYou( [] );
WhoAreYou( "0" );
WhoAreYou( "false" )

function WhoAreYou(arg) {
    if (arg) {
        console.log(arg + " is true!")
    } else {
        console.log(arg + " is false!");
    }
}

//const, let ja var

const color = "red"; //Vakio muuttujaa ei voida uudelleen määrittää jälkeenpäin
console.log(color);

function Hassua() {
    if(true) {
        var variable = "hassuttelua"
    }
    console.log(variable);
}
Hassua();

//ctrl+(vasen/oikea) siirtää yhden sanan eteen tai taakse
//alt+shift+(vasen tai oikea) valitsee sanan. Myös ctrl+shift+L
//ctrl+back space poistaa edellisen sanan
//home-näppäin siirtää kursorin rivin alkuun ja end-näppäin sen loppuun
//ctrl+x poistaa koko rivin
//ctrl+A valitsee kaikki