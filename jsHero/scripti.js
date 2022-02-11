//Tehtävä 1 Variables
let firstname = "Lata";

//Tehtävä 2 What is x?
let x = 'Geeta'; //Muuttuja x saa arvoksi 'Geeta'

//Tehtävä 3 Several variables
let flower, tree;
flower = "rose";
tree = "maple";

//Tehtävä 4 Reassignment
let x = 'Tic';
x = 'Tac';
x = 'Toe'; //x arvoksi jää 'Toe'

//Tehtävä 5 
let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z; //x:n arvoksi tulee 'Hardy'

//Tehtävä 6 Functions
function hello(){

    return 'Hello world!';
    
    }

//Tehtävä 7 Multiple functions
function a(){
    return 'Hello a!';
   }
   
   function b(){
    return 'Hello b!';
   }

//Tehtävä 8 Function calls
function greet(){
    return 'Haydo!';
   }
   
   let salutation = greet();

//Tehtävä 9 What is x?
function hello() {
    return 'Hi!';
  }
  
  let x = hello();
  //Muuttuja x:n arvoksi tulee 'Hi!'

//Tehtävä 10 Parameters
function echo(parameter){
    return parameter;
   }

//Tehtävä 11
function reply(phrase) {
    return phrase;
  }
  
  let x = reply('How do you do?'); //muuttuja x:lle tulee arvoksi 'How do you do?'

//Tehtävä 12 Strings
function greet(parameter){
    return 'Hello ' + parameter + '!';
   }

//Tehtävä 13 What is x?
function whereIs(name) {
    return 'Where is ' + name + '?';
  }
  
  let x = whereIs('Jacky'); //Muuttuja x:lle tulee arvoksi 'Where is Jacky?'

//Tehtävä 14 What is x?
function hi(name) {
    return 'Hi ' + name + '!';
  }
  
  let h1 = hi('Selva');
  let h2 = hi('Pola');
  let x = h1 + ' ' + h2; //Muuttuja x:lle tulee arvoksi 'Hi Selva! Hi Pola!'

//Tehtävä 15 Logging
  function log(){
    console.log('Hello Console!');
   }

//Tehtävä 16 Logging variables
function log(parameter){
    console.log(parameter)
   }

//Tehtävä 17 Logging and Strings
function shout(word) {
    let apumuuttuja = word + word;
    console.log(apumuuttuja);
    return apumuuttuja;
  }

//Tehtävä 18 
