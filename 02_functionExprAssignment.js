console.log("1....");
var squre = function(num)
{
    var result=num*num;
    console.log("The Squre of ",num,"=",result);
}
var result=squre(5);
var result=squre(6);
var result=squre(25);
var result=squre(100);
console.log("2....");
console.log(typeof squre);
console.log("3....");
var swapValues=function(num1,num2)
{
    console.log("Before swap",num1,num2);
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log("After swap",num1,num2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("4....");
var jsstring=function()
{
    var language="JS is most popular language";
    console.log("the given string is:",language);
    console.log("Total character in the string is: ", language.length);
    console.log("Char at index 6: ", language.charAt(6));
    console.log("Char at index 11: ", language.charAt(11));
    var lengthTotal = language.length;
    console.log("Char at last index : ", language.charAt(lengthTotal-1));
    console.log("very first character of string : ", language.charAt(0));
    console.log("The length of given string is:",language.length);
}
jsstring();
squre(27);
console.log(typeof jsstring);

