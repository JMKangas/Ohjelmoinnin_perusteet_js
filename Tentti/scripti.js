

var a = "1, 2, 4";


var b = a.split(',').map(function(item) {
  return parseInt(item, 10);
});


console.log(a);
console.log(b);


function tarkista2(array) {
    for (var i = 0; i < array.length; i++) {

        var format = /^[!@#$%^&()_\=\[\]{};':"\\|,.<>\?]*$/;

        if( format.test(array[i]) ){
        return false;
        }else{
  return true;
}
    }
}


function testaa() {
    let lasku = ["+", "*"];
    let lasku2 = ["#", "/"];

    console.log(tarkista2(lasku));
    console.log(tarkista2(lasku2));

}