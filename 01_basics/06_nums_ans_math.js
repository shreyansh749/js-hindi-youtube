const score = 400
 //console.log(score);

const balance = new Number(400);
//console.log(balance.toString().length);

const otherNumber = 123.8946
console.log(otherNumber.toFixed(2)); //take the number upto 2 decimal place and roundoff w.r.t next digit
//console.log(otherNumber.toPrecision(5));
const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));
 
//***************  maths  ****************
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(1,4,6,7));
// console.log(Math.max(1,4,6,7));
console.log(Math.round(Math.random()*10) + 1); // to exclude 0 it give integer from the range 1-11
const min=10
const max=20
console.log(Math.round(Math.random()* (max-min+1)+min));