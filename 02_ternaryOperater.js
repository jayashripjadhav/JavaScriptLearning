var eligiblityCriteria=function(gradScore,hscScore,sscScore,candidateName)
{
     result=gradScore>=70 || hscScore>=80||sscScore>= 90 ?`Congrats ${candidateName} you are Eligible `: `Unfortunately ${candidateName} you are not eligible`;
     console.log(` ${result} for TCS interview`);
}
eligiblityCriteria(80,86,90,"Jayashri");
eligiblityCriteria(70,65,55,"Gauri");
eligiblityCriteria(60,79,88,"Poonam");