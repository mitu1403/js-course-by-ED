
var printPlayerName = function(name){
    console.log(name);
}
//printPlayerName("sakib");


// ------  IMPLICIT BINDING  ------  //

/*   Example - 1    */
var sakib = {
    name: "Sakib",
    age: 35,
    printPlayerName: function(){
        console.log(this.name);
    }
};
sakib.printPlayerName();  // => Outuput: Sakib
/*
    => sakib obj er name property ache.
    => tahole ei "this" obj er name property ke denote korche
*/

/*   Example - 2    */
var printPlayerNameFuction = function(obj){
    obj.printPlayerName = function(){
        console.log(this.name);
    }
};
var tamim = {
    name: "tamim",
    age: 35
};
var mushfiq = {
    name: "mushfiq",
    age: 40
};

printPlayerNameFuction(tamim);
printPlayerNameFuction(mushfiq);

tamim.printPlayerName();   // => Outuput: tamim
mushfiq.printPlayerName();// => Outuput: mushfiq
/*
    => first e function call korlam 
    => tarpor function er property dhore kaj korlam
    => sesob function er jonno jetate obj pass hocche.
*/

/*   Example - 3    */
var Person = function (name, age){
    return{
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        }
    }
};
var sakib = Person('sakib', 25); 
/* 
    => person function ta k duita parameter pass kore call korlam
    => eta just akta obj return korche kono output dicche na  
*/
sakib.printName();
console.log(sakib.age);

/*   Example - 4    */
var Person = function (name, age){
    return{
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
        father: {
            name: "Mr. XXX",
            printName: function(){
                console.log(this.name);
            }
        }
    };
};
var sakib = Person('sakib', 25); 
sakib.printName();
sakib.father.printName();
/* 
    => ekhane "this" point korche sakib er bhitor function object ke
*/


// ------  EXPLICIT BINDING  ------  //

/*   Example - 1 call() */
/*    without parameter */
var printName =  function(){
    console.log(this.name);
}; // akhon printName global scope e chole asche
  //  jekono obj akhon eta call korte parbe.

var sakib = {
    name: "Sakkib",
    age: 35
}
printName.call(sakib);
// with call(), an obj can use a method belonging to another object
// globalFunction.call(obj)

/*    Example - 2   */
/*   with parameter */
var printName =  function(v1, v2, v3){
    console.log(`${this.name} is ${v1}, ${v2} and ${v3} `);
};

var sakib = {
    name: "Sakkib",
    age: 35
}
var v1 = "good";
var v2 = "all-rounder";
var v3 = "player";

printName.call(sakib, v1, v2, v3);

/*    Example - 3 apply()  */
var printName =  function(v1, v2, v3){
    console.log(`${this.name} is ${v1}, ${v2} and ${v3} `);
};

var sakib = {
    name: "Sakkib",
    age: 35
}
var v1 = "good";
var v2 = "all-rounder";
var v3 = "player";

var v = [v1, v2, v3]

printName.call(sakib, v);  // call() akta akta kore variable nay
printName.apply(sakib, v);//  apply() array hisebe nay

/*    Example - 4 bind()  */
var printName =  function(v1, v2, v3){
    console.log(`${this.name} is ${v1}, ${v2} and ${v3} `);
};

var sakib = {
    name: "Sakim",
    age: 35
}
var v1 = "good";
var v2 = "all-rounder";
var v3 = "player";

var newFunc = printName.bind(sakib, v1, v2, v3);// function er instance return kore mane function tak call kore variable er modhe save kora hoyeche
newFunc(); // thn call korle output pawa jabe



// ------  NEW BINDING  ------  //

function anotherPerson(name, age){  // anotherPerson ta hocche constructor function jokhn new prototype use kora hoy
    // let this = Object.create(null);
    this.name = name;
    this.age  = age ;
    console.log(`${this.name} is ${this.age} years old`);
    // return this;
}
var sakib = new anotherPerson("Sakibul", 25);


// ------  WINDOW BINDING  ------  //
var PrintName2 = function(){
    console.log(this.name);
};

var sakib = {
    name: "Sakib"
};

PrintName2(); // => output should be undefined.