"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Rs 300" /* Fuel.Diesel */);
console.log("RS 450" /* Menu.Tikka */);
// Rest Parameter:
function Wallet(color, ...others) {
    console.log(others);
    console.log(color);
}
Wallet("red", "currency", "nic", "ATM Card");
// Example:
function FileUpload(File1, ...rest) {
    console.log(rest.join);
    console.log(File1);
}
FileUpload("Image", "Text", "File", "Audio");
// Optional Parameter:
function Form(name, feedback) {
    console.log(name, feedback);
}
Form("Faryal", "Good Class");
let product = {
    name: "Bread"
};
console.log(product);
// Narrowing:
// let age: number | string
// age = 22.5567
// console.log(typeof age);
// if(typeof age == "number"){
// 	console.log(age.toFixed(4));
// }
// ToUpperCase Narrowing:
// let age: number | string
// age = "twenty"
// if(typeof age == "number"){
// 	console.log("this is number"//age.toFixed(2)
// );
// }else{
// 	console.log(age.toUpperCase());
// }
// // Any
// let value:any
// value = 30             //num
// value = "hello"        //sting
// value = []            //array
// value = {}            //obj
// value = () => true   //function
// // Any & Unknown Different:
// let val:unknown
// let value1:unknown = val  //ok
// let value2:any = val      //ok
// let value3:string = val   //Error
// 	Module:
const type_1 = require("./type");
console.log(type_1.oil);
const res = (0, type_1.add)(10, 5);
console.log(res);
// Explicit Casting:
let val = "Faryal";
console.log(val);
