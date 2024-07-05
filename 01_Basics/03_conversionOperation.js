// let score = "33"

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score) //converts string into number but be careful as it can also convert like 33abc to number but its value will be displayed as Nan
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber);

// let score = null
// let valueInNumber = Number(score)
// console.log(valueInNumber); //value displayed will be 0 and if undefined is there the value will be Nan and for true --- 1, false --- 0, string = "Hitesh"---Nan

//"33" => 33
//"33abc" => Nan
//true => 1
//false => 0
//"Basun Kundu" => true

// let isLoggedIn = "Basun Kundu"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let someNumber = 33
// let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof (stringNumber));

//* *********Operations*******

let value = 3;
let negvalue = - value
//console.log(negvalue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2)  //12
// console.log(1 + "2") //12   
// console.log("1" + "2" + 2); //12
// console.log(1 + 2 + "2") //32 because of primitive type operation, don't go to deep in it

// console.log(+true); //1
// console.log(+""); //0

// let num1, num2, num3
// num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);