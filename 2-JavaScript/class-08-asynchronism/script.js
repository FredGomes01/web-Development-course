//timeout and interval

function test() {
    console.log("Test");
}
setTimeout(() => {
    console.log("timeout");
},1000);

setInterval(() => {
    console.log("Interval");
},3000);

setInterval(() => {
    const clock = new Date();
    console.log(clock.toLocaleTimeString());
},5000);
 
console.log("Antes")
console.log("Depois");

//promises

const urlAPI = "https://jsonplaceholder.typicode.com";

//"https://jsonplaceholder.typicode.com/users"
fetch(urlAPI + "/users")
.then((response) => response.json())
.then((data) => console.log(data));

//console.log ("final");

for (let i = 0; i < 200000; i++) {
    console.log(i);
}

setTimeout(() =>{
    console.log("timeout");
}, 1000);