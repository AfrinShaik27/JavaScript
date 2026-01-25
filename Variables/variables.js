// window.alert("Welcome to new beginnings!");
// alert("Welcome to afrin beginnings!");
//variables
//variables are containers for storing different types of data  which are in the form of number,string,boolean etc.,
age=23;
name="Afrin";
priceOfProduct=37.45;
isFollow=true
console.log(name);
console.log(age);
console.log(priceOfProduct);
console.log(isFollow);
// let b=10;
// if(a==b)
// {
//   alert("Welcome to afrin beginnings!");
// }
// else{
//   window.alert("I'm here");
// }

//rules for creating a variable names:
//1.variables names are case sensitive which means that a and 'A' are different
//2.variables can start with letters,underscore(_),dollar symbol($) and numbers(0-9)
//3.variable namecan start with only letter,underscore and dollar
//4.to be a  good programming reserved keywords can not be used as variables names
productValue=89;
$ame="afrin";
//1234college="SVCN";-> it gives error becoz An identifier or keyword cannot immediately follow a numeric literal.
_age=23;
_$gender="female";
console.log(productValue);
console.log($ame);
console.log(_age);
console.log(_$gender);
//5.variable names should not contain spaces
//first name="afrin";//iit gives an error

//var,let,const:
//var:
//by using using this var keyword we can re declare and reassignt the varaible and it is global scoped variable.
var city="nellore";
console.log(city);
var city="hyderabad"
console.log(city);

//let:
//by using this we cannot be re declare but we reassign the variable:
let fruit="apple";
console.log(fruit);
// let fruit="orange";-> it gives error becoz it is a block scope variable.
fruit="banana";
console.log(fruit);

//const:
//by using we can not redeclare and reassign the variable and it also a  block scoped vraible.
const daysInWeek=7;
console.log(daysInWeek);
{
  const pi=3.14;
  console.log(pi);
 // const pi =3.14567; ->error
}
//const daysInWeek=8;->error