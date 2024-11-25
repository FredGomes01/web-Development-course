// strings

console.log("test");

let concept = "prototype (chain)";
let myName = "Fred Gomes";

console.log(myName.__proto__);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());

console.log(myName.slice(2));
console.log(myName.slice(-3));
console.log(myName.slice(2, -3));

console.log(concept.length);
console.log(concept.indexOf("o", 5));

// numbers

let num1 = 123456789;
let num2 = 5.9999942343256;

console.log(String(num1).length);
console.log(num2);
console.log(num2.toFixed(2));

console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));

console.log(Math.abs(num2));
console.log(Math.trunc(num2));

console.log(Math.round(5.4)); // 0-4 / 5-9
console.log(Math.ceil(5.001));
console.log(Math.floor(5.999));

console.log(Math.random());
console.log(Math.ceil(Math.random() * 10));

const times = ["Corinthians", "Flamengo", "Vasco", "Fortaleza", "Ceará", "São Paulo"];

const randomNumber = Math.floor(Math.random() * times.length);
console.log(times[randomNumber]);
//array

console.log ("bem vindo à aula" .replace(" ","-"));
console.log ("bem vindo à aula" .replaceAll(" ","-"));

console.log("Fred Gomes de souza".split(""));
console.log("Fred Gomes de souza".split(" ") [1]);

console.log("Fred" .split("").reverse().join(""));

function wordCount(text) {
 const count = text.split("").length
  return count
}
const text = "Lorem ipsum dolor sit amet.";
console.log(wordCount (text));

const tvPrograms =["Domingo Legal", "Fantástico","Domingão com Hulk"];
//FIFO
tvPrograms.pop();
tvPrograms.pop();
tvPrograms.push("Bom dia e cia");
tvPrograms.push("TV Globinho");
tvPrograms.pop();
//LIFO
tvPrograms.unshift("TV Cruj");
tvPrograms.unshift("Castelo Ratibum");
tvPrograms.shift();

tvPrograms.splice( 0, 1)
tvPrograms.splice( 1,2,"eeeeeee");

console.log(tvPrograms);
// date

const dateNow = new Date()

console.log(dateNow);

console.log(dateNow.toLocaleString("pt-BR"));
console.log(dateNow.toLocaleDateString("pt-BR"));
console.log(dateNow.toLocaleTimeString("pt-BR"));

console.log(
  dateNow.toLocaleString( "pt-BR",{
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
);

const birthday = new Date("2008-09-25 00:00:00");

console.log(birthday);
console.log((dateNow - birthday ) / 1000 / 60 / 60 / 24 /365.25);

console.log(dateNow.getFullYear());
console.log(birthday.getFullYear());
console.log(dateNow.getFullYear() - birthday.getFullYear());  

function isPalindrome(text) {
  const original = text.replaceAll(" ", "").
  toLocaleLowerCase();

  const reverse = original.split("").reverse().join("");

  return original == reverse
};
console.log(isPalindrome("a torre da derrota"));

const newyear = new Date("2025-01-01 00:00:00");
const oldDate = new Date();
const daysTonewYear = newyear - oldDate;

console.log( Math.floor(daysTonewYear /1000 / 60 / 60 / 24));

