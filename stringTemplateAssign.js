function stringTemplateAssign()
{
    var string='My dream company name is : "TCS"';
    console.log(string);
    console.log("------------------------------------------");
    var hobbies1="Reading books";
    var hobbies2="Whatching Movies";
    var hobbies3="Listening old song ";
    console.log(`My hobbies are: ${hobbies1} ${hobbies2} ${hobbies3}`);
    console.log("My hobbies are: "+ hobbies1  + hobbies2  + hobbies3);
}
stringTemplateAssign();
console.log(typeof stringTemplateAssign);
