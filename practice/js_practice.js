let inbox = 100;

inbox = 200;

//alert(inbox);

let inbox1;
console.log(inbox1);

const user = {
    name: "lala",
    age : 25,
    married: false,
    greet: function(){
        console.log('Hello There!!');
    }
};
user.greet();
console.log(user.name);

// A simple switch statement example

let userInput = prompt("Tell me a fruit");

switch(userInput.toLowerCase()){
    case "banana":
        console.log('You like banana!!');
        break;
    case "apple":
        console.log("You like apple !!");
        break;
    default:
        console.log("I don't know about this.");
}

// for of && foreach
const names = ['dev', 'devi', 'devu', 'devid'];

for(let name of names){
    console.log(name, names.indexOf(name));
}
names.forEach(function(name,index){
    console.log(name, index);
});

let myGlobal=10;
function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal= 5
    console.log(typeof oopsGlobal);
  
  }
fun1()
  
// Only change code above this line
  
function fun2() {
var output = "";
if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
    console.log(output);
}
if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
    console.log(output);
}
console.log(output);
}
fun2();