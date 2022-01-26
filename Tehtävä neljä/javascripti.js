
let a = 10, b = 11, c = 12, d = 13, apu1;

console.log("Muuttuja a:n arvo on: " + a);
console.log("Muuttuja b:n arvo on: " + b);
console.log("Muuttuja c:n arvo on: " + c);
console.log("Muuttuja d:n arvo on: " + d);

apu1 = d;
d = a;
a = apu1;
apu1 = b;
b = c;
c = apu1;
console.log("muuttujien arvo vaihtuu. Käytössä on yksi apumuuttuja")
console.log("Muuttuja a:n arvo on: " + a);
console.log("Muuttuja b:n arvo on: " + b);
console.log("Muuttuja c:n arvo on: " + c);
console.log("Muuttuja d:n arvo on: " + d);
