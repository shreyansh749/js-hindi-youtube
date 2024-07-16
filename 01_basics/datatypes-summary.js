//1.Primitive
/* 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt
*/
const value=33
const outsideTemp = null
let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 3533645636335363637n

/*
2.Reference (Non Promitive)
  Array, Objects, Functions
*/
const hero = ["shaktiman","nagraaj", "dogga"];

let myobj={
    name: Shreyansh,
    age: 19,
};
 const myFunction = function(){
    console.log("hello world");
 }

//********************************** 
//  Stack( primitive), Heap (Non-Primitive)
let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"
 console.log(myYoutubeName);
 console.log(anotherName);
