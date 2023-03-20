console.log(`Object using literals`);
const personalDetails={
    firstName:"Jayashri",
    lastName:"Jadhav",
    birthDate:"9 July 1994",
    age:28

}
console.log(personalDetails);
console.log(`Object using literals`);
const collegeDetails={
    collegeName:"Vidnyan Mahavidhyalaya Sangola",
    location:"Near bus stand sangola",
    univercity:"Solapur",
    education:"MCA"
}
console.log(collegeDetails);
console.log(`My personal information and college details using merge:`);
Object.assign(personalDetails,collegeDetails);
console.log(personalDetails);
console.log(`-------------Friends names creating array and freeze it------------`);
const friendsName=["Archana","Ashwini","Gauri","Pooja"];
console.log(`My friend name:${friendsName}`);
friendsName.push("Biru");
console.log(`Adding one name:${friendsName}`);
//Object.freeze(friendsName);
friendsName.push("Lakhan");
console.log(`Using for of loop display array friendsName`);
let text = "";
for (let x of friendsName) {
  text = x;
  console.log(text);

}
console.log(`-------Reverse the word technology in the string-------`)
let str="Codemind Technology";
console.log(`Company name is:${str}`);
var reverseString = "";
 var lastCharPosition = str.length-1;
for (let index = lastCharPosition; index >= str.length-10; index-- ){
    var char = str.charAt(index);
      reverseString = reverseString.concat(char);
      const first = str.split(" ")[0];
      result=first.concat(" ",reverseString);
     // console.log(char);
    
}
console.log(result);

