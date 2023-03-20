function squreOfWordLength(string)
{ 
    var wordLength = string.length;
    console.log(`The length of word  ${string} is: ${wordLength}`);
    var squreWordLength=wordLength*wordLength;
    console.log(`The squre of word length is:${squreWordLength}`);
}
squreOfWordLength("JavaScript");
squreOfWordLength("Google Chrome");
squreOfWordLength("Developer Smart");
console.log("----------------------------------------------------");
var string=function()
{
    var string1="I am Angular developer";
    var string1Length=string1.length;
    console.log(`The length of string is:${string1Length}`);
    var wordsInString = string1.split(" ");
    console.log("Total words in string is: ", wordsInString.length);
    var multiply=string1.length*wordsInString.length;
    console.log(`Length of string "multiple"by total no of words is:${multiply}`);
    var divide=string1.length/wordsInString.length;
    console.log(`Length of string "divide"by total no of words is:${divide}`);
}
string();