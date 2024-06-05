// Const Enum:
const enum Fuel {
	Petrol = "Rs 270",
	Diesel = "Rs 300"
}

console.log(Fuel.Diesel);

// Example:
const enum Menu {
	Tikka = "RS 450",
	Beef = "RS 300",
	Boti = "RS 350"
}
console.log(Menu.Tikka);

// Rest Parameter:
function Wallet(color:string , ...others:string[]){
	console.log(others);
	console.log(color);
	
}
Wallet("red", "currency", "nic", "ATM Card")

// Example:
function FileUpload(File1:string , ...rest:string[]){
	console.log(rest.join);
	console.log(File1);
	
}
FileUpload("Image", "Text", "File", "Audio")


// Optional Parameter:
function Form(name:string , feedback?:string){
	console.log(name , feedback);
	
}
Form("Faryal", "Good Class");

// Interface Parameter:
interface Product {
	name:string,
	price?:number
}
let product:Product = {
	name:"Bread"

}
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
import {oil,add} from "./type"

console.log(oil)
const res = add(10,5)
console.log(res);

// Explicit Casting:
let val: unknown = "Faryal"
console.log((val as string));
