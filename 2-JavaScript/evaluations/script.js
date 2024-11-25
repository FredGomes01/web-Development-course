// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo:
// Sting, Number, Boolean, Function, Array, Object

const string = "Fred";
let number = 1;
let boolean = true;

let addFunction = () => 1 + 1;

function addNumbers(num) {
  return num + 1;
}

let array = [1, "A", [1, 2, 3]];

const object = {
  name: "fred",
  age: 31,
};
// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

let num1 = Number(prompt("digite um numero: "));
let num2 =  Number(prompt("digite um numero: "));

console.log( num1 + num2);
console.log( num1 - num2);
console.log( num1 * num2);
console.log( num1 / num2);
console.log( num1 ** num2);
console.log(Math.sqrt(144));
console.log(144 **  ( 1 / 2 ));

// Questão 6 (while):

// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60

let count = 0;
while (count < 100) {
 count += 1;

if(count >= 40 && count <= 70) {
    continue;
    break;
}

if (count % 1 == 0) {
   console.log(count);
 }
}

// Questão 4 (Data Manipulation):

// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro

const Names =[ "Caça Rato", " Pé De Rato", "Kalvin"]

Names.push("FG");
Names.unshift("DG");

console.log(Names);
// Questão 7 (if):

//Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa (quando estiver inferior à metade da máxima
// A velocidade da pista é de 60km/h

const speed = 200;
const max = 60;

if (speed > max) {
  console.log("Sai do mei dona maria");
} else if (speed < max / 2) {
  console.log("O anjo aguarda");
} else {
  console.log("O anjo guarda");
}
