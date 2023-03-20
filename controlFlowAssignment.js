console.log(`Ques1:Count the total number of vowels for string`);
var sentence = "I Am very good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        console.log(`Given string is : ${sentence}`);
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);
console.log(`----------------------------------------------------`);
console.log(`Ques2:Function to get sum of cube of numbers`);
function sumOfCube() {
    let sum=0;
    3
    for (let num = 1; num <=5; num++) {
        var cube=(num*num*num);
        
        sum=sum+cube;
     }
     console.log(`The sum of cube of 1 to 5 number is:${sum}`);   
}
sumOfCube();

console.log(`----------------------------------------------------`);
console.log(`Ques3:`);
function oddPossitionedChars(string) {
    console.log("Before removing spaces string is:", string);
    let emptyString="";
    var resultTrim = string.split(" ").join("");
   console.log( "After removing spaces string is:", resultTrim);
   for(var char = 0; char <=resultTrim.length; char++){
    if(char%2 != 0){ 
       emptyString=emptyString+resultTrim[char];
    }
}
console.log(`The oddpositioning char in the string is: ${emptyString}`);
console.log(`---------------------------------------------------------`);
}
oddPossitionedChars(`"Hard work always pays back"`);
oddPossitionedChars(`"Soon I will be Angular IT Champ"`);