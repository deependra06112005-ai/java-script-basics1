/*console.log("hello world");
let a = 10;
let b = 20;
console.log(a+b);
accountCity = "kochi"
accountNumber = 1234567890
accountEmail = "deepu@example.com"
console.table([accountEmail, accountCity, accountNumber])
let x = 10;
let y = 20;
let z = x + y;
console.log(z); */


/* data types in js*/
let name = "deepu";
let age = 25;
let isLoggedIn = true;

//number =>2 to 53
// bigint 
// string => " " or ' ' or ` `
// boolean => true or false
// null => empty value 
// undefined => value not assigned 
// symbol => unique identifier  
/* Operations in js */
/*let a = 10;
let b = 20;
console.log(a+b); // addition
console.log(a-b); // subtraction
console.log(a*b); // multiplication
console.log(a/b); // division
console.log(a%b); // modulus
console.log(a**b); // exponentiation */

console.log(10 + "20"); // 1020
console.log(10 - "20"); // -10
console.log(10 * "20"); // 200
console.log(10 / "20"); // 0.5
console.log(10 % "20"); // 10
console.log(10 ** "20"); // 100000000000000000000 
 /* Conversions*/
let num = 10;
let str = String(num);
console.log(str); // "10"
console.log(typeof str); // string 




let strNum = "20";
let num2 = Number(strNum);
console.log(num2); // 20
console.log(typeof num2); // number

let bool = true;
let num3 = Number(bool);
console.log(num3);
let bool2 = Boolean(num3);
console.log(bool2); // true      
this is a comment 

// 1=> true; 0=> false; any non zero number => true; empty string => false; any non empty string => true; null => false; undefined => false; NaN => false

let str3 = "hello";
let bool3 = Boolean(str3);
console.log(bool3); // true

let emptyStr = "";
let bool4 = Boolean(emptyStr);
console.log(bool4); // false

