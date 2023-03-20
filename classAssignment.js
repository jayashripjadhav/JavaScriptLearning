console.log(`Ques1:Information of vehicals using class: `);
class Vehical{
    type
    name
    colour
    companyName
    price
    constructor(type,name,colour,companyName,price){
        this.type=type;
        this.name=name;
        this.colour=colour;
        this.companyName=companyName;
        this.price=price;
    }
    //details(){
    //    console.log(this.type,this.name, this.colour,this.companyName,this.price);
   // }

}
let result1=new Vehical("Two wheeler","Honda Unicorn","Black","Honda","1.05lakh");
console.log(result1);
let result2=new Vehical("Three wheeler","Bajaj Maxima C","Black","Bajaj"," 2.83 lakh");
console.log(result2);
let result3=new Vehical("four wheeler","KUA 100","Black","Mahindra","9lakh");
console.log(result3);
let result4=new Vehical("Two wheeler","Mastro Edge","red","Honda","75 k");
console.log(result4);




