console.log("---------Greatest Number using ternary operator-------");
var greatestNumber=function(num1,num2)
{
   
    var geatestNumberResult=num1 > num2 ? num1 : num2;
    console.log(`The greatest number is: ${geatestNumberResult}`);
}
greatestNumber(10,20);
greatestNumber(899,800);
console.log("---------Even Odd Number using ternary operator-------");
var evenOdd=function(num1)
{
    
    var evenOddResult= (num1%2==0) ? "EVEN" : "ODD" ;
    console.log(`Given number is ${num1}: ${evenOddResult}`);

}
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);
console.log("---------Even Odd Number of string length using ternary operator-------");
var evenOddStringLength=function(string1)
{
      var stringlength=string1.length;
      var evenOddString=stringlength%2==0 ? "EVEN" : "ODD";
     console.log(`Given word ${string1} length is : ${evenOddString} `);
}
evenOddStringLength("JavaScript");
evenOddStringLength("Developer");
evenOddStringLength("Google");