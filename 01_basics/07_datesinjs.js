//Dates
let myDate = new Date()
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.toTimeString());


//let myCreateDate = new Date(2023, 1, 7)
//let myCreateDate = new Date(2023, 1, 7, 5, 3)
let myCreateDate = new Date("07-22-2023")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate.getDay());
//  `${newDate.getDay()} and the Time'

newDate.toLocaleString('default',{
    weekday: "long",
})