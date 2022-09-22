//-----   ES6 Fat Arrow Function   -----//

// function number(){
//     return 10;
// }
// This can be written as =>
let number = () => {
    return 10;
} ; 
// more simplified version for return 
let number1 = () => 11 ;
console.log(number1()); 

let number2 = () => console.log(16);
number2();

let number3 = n => n;
console.log(number3(18));

let number4 = (m,n) => n * m;
console.log(number4(3,4));

var js = {
    name: "JS",
    libraries: ['React', 'Angular','Vue'],
    printLibraries: function(){
        // here 'this' is js obj
        this.libraries.forEach(function(a){
            // here 'this' ke forEach chine na 
            console.log(`${this.name} loves ${a}`);
        });
    },
};
js.printLibraries(); // in forEach function this != 'JS'

// SOLUTION => arrow function()
var js = {
    name: "JS",
    libraries: ['React', 'Angular','Vue'],
    printLibraries: function(){
        // here 'this' is js obj
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }, // ekhane this er reference bahirer this er value er soman
};
js.printLibraries();

// limitations: new will not work with arrow function

var Person = (name) => this.name = name;

//var sakib = new Person ('Sakib'); 

// this will throw an error because here person is not an constructor