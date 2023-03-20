class Employee{
    name
    age
    id
    city
    constructor(name,age,id,city){
        this.name=name;
        this.age= age;
        this.id=id;
        this.city=city;
    }
    details(){
        console.log(this.name,this.age,this.id,this.city);
    }

}
let empSmith=new Employee("Smith",29,01,"Sangola");
let empJay=new Employee("Jay",28,02,"Pune");
let empRaj=new Employee("Raj",25,03,"Mumbai");
console.log(empSmith);
empSmith.details();
console.log(empJay);
console.log(empRaj);

