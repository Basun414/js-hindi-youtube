const name = "Hitesh"
const repoCount = 50

//console.log(name + repoCount + "Value");  //old method no one uses now a days
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //string interpolation
const gameName = new String('hiteshc');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4) //negative starting insex can be used in slice only not in substring.
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne.trim()); //trim is used in whitespace only not in line terminators

const url = "https://www.youtube.com/chai%20aur%20code" //example- whitespace are replaced by %20 by browser
console.log(url.replace('%20', '-'))

console.log(url.includes('youtube'));
//always follow the backtrack sentence this method `` rather than + method as it is old method