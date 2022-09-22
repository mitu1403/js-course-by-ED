var age = 15;

var type = age > 15 ? "adult" : "child";

console.log(type);

// nested

var age = 15;

var type = age > 15 ? "adult" : age > 10 ? "Young" : "Child";

console.log(type);

// more specified

var a = 5;

var access = a > 5 ? true : false;
var access = a > 5 ; // same as before

console.log(access);