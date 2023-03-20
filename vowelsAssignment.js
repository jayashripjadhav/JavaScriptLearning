function countCharA(string) {
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    if (char=='a' || char=='A' ) {
        // console.log(char);
        counter = counter +1;
    }   
}
console.log(`String is : ${string}`);
console.log(`Total number of character'a' or'A' in string is : ${counter}`);
console.log(`------------------------------------------------------`);
}
countCharA("I Am Learning JavaScript, The Language of internet");
countCharA("My Favourite movie is LAggAn");
