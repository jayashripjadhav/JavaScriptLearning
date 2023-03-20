var stringHandsOn=function()
{
   var string="     Hey you are doing good, keep it up     ";
   console.log(string);
   console.log("--------------------------------------------------------");
   var stringLength=string.length;
   console.log("The length of string:",stringLength);
   console.log("--------------------------------------------------------");
   var resultTrim = string.trim();
   console.log( "After removing extra spaces string is:", resultTrim);
   var resultTrimLength=resultTrim.length;
   console.log("After removing extra spaces string is:",resultTrimLength);
   var extraSpaceLength=stringLength-resultTrimLength;
   console.log("Extra spaces length is:", extraSpaceLength);
   console.log("First character after trim:",resultTrim.charAt(0) ,"Last character after trim",resultTrim.charAt(resultTrimLength-1));
}
stringHandsOn();