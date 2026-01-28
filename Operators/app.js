//operators
//operators are used to perform some operation on data
//there are different types operators are avilable in javascript we will one by one
//1.arithmetic operators
//+,-,*./,%,**,++,--
let a=5;
let b=2;
console .log("a + b =", a+b);//7
console .log("a - b =", a-b);//3
console .log("a * b =", a*b);//10
console .log("a / b =", a/b);//2.5
console .log("a % b =", a%b);//1
console .log("a +** b =", a**b);//25
// unary operators
//postincrement first use then icrement
console.log("a++ =",a++);
console.log(a)
//preincrement ++a;//first increment then use
console.log("++a =",++a);
console.log(a);
//postdecrement b--: first use then decrement
// console.log("b-- =",b--);
// console.log(b);
//predecrement --b :first decrement then use
console.log("--b =",--b);
console.log(b);

//2.Assignment operators
//used to assign value to a variable
//=,+=,-=,*=,/=,% =,**=
let c=5;
console.log("c = ",c);
c+=4;//c=c+4
console.log("c = ",c);
c-=3;//c=c-3
console.log("c = ",c);
c*=3;//c=c*3
console.log("c = ",c);
c/=3;//c=c/3
console.log("c = ",c);
c%=2;//c=c%2
console.log("c = ",c);
let d=2;
d**=3;//d=d**3
console.log("d = ",d);
//3.comparison operators:
//these operators are used to compare two values, and it returns a bollean value either true or false.
//==,===,!=,!==,!===,<,>,<=,>=
let p=5.7;
let q=5.8;
console.log( "p = ",p);
console.log("q = ",q);
console.log("p==q = ",p==q);
console.log("p===q = ",p===q);
console.log("!p==q = ",!p==q);
console.log("p!===q = ",!p===q);
console.log("p < q = ",p<q);
console.log("p <= q = ",p<=q);
console.log("p > q = ",p>q);
console.log("p > q = ",p>=q);

//4.Logical Operators
//these operators are used to perform logical operations with multiple 2 or experressions , and it returns a single bollean value either true or false.
//&&,||,!
let x=true;
let y=false;
console.log("x && y = ",x && y);
console.log("x || y = ",x || y);
console.log("!x = ",!x);
console.log("!y = ",!y);