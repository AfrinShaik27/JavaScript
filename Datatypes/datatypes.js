//datatypes
//->it is mainly used to specify the type of data that a variable holds.
//there are 2 types datatypes:
//1.primitive datatypes:
// 1.number 
let num1=45;
console.log(num1);
console.log(typeof num1);//number
let num2=23.5
console.log(typeof num2);
//2.string
let myname="afrin";
console.log(typeof myname);//string
//3.boolean
let isavailable=true;
console.log(typeof isavailable);
//4.undefined
let a;
console.log(typeof a);
//5.null
let b =null;
console.log(typeof b);
//6.symbol
//this is not majorly not used
let x=Symbol("afrin");
console.log(typeof x);
//7.Bigint
let y =BigInt("3436434938594054509039");
console.log(typeof y);
//2.non-primitive datatypes and it also called as user-defined datatpes:
//1.object;
//it is collection of key value pairs
let my_details={
  name:"afrin",
  age:23,
  ismarried:false,
  education:"b.tech"
}
console.log(typeof my_details)
console.log(my_details);
console.log(my_details.name);
console.log(my_details.age);
console.log(my_details.ismarried);
console.log(my_details.education);
//2.array
//it is collection of same datatype values,where object is collection of different datatype values.
let vegitables=["potato","ladyfinger","carrot","bringle","cabbage"];
console.log(typeof vegitables);
console.log(vegitables);
console.log(vegitables[1]);
console.log(vegitables[2]);
console.log(vegitables[3]);
console.log(vegitables[4]);
