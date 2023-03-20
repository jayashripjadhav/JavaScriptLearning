console.log(`Create class with all possible data member and should be initilized using constructer`);
class Bank {
    constructor(bankName, location,account_no,interest_rate) {
      this.bankName = bankName;
      this.location = location;
      this.account_no =account_no;
      this.interest_rate = interest_rate;
    }
  }
  const axix_bank = new Bank ( "Axix bank", "Viman nagar",6566243165233,"8%");
  const sbi_bank = new Bank("State bank of india","Pune",216336335233,"10%");
  const hdfc_bank = new Bank("HDFC bank","Mumbai",5642153145202,"12%");
  const kotak_bank = new Bank( "Kotak bank","Katraj Pune",264232145321,"14%");
  const yes_bank = new Bank( "Yes bank","Dekkan Pune",2642265214532,"12%");
  const panjab_bank = new Bank( "Panjab bank"," Dehu Pune",5212265214532,"13%");

  console.log(`Initilization using constructor `); 
  console.log(axix_bank);
   console.log(sbi_bank);
   console.log(hdfc_bank);
   console.log(kotak_bank);
   console.log(yes_bank);
   console.log(panjab_bank);
  console.log(`------------------------------------------------------------------------------------------`);
  // Collection - Collection of elements 
  // Elements of Datatypes - Primitive and Non primitive (Reference)
  console.log(`Add all object elements in array and traverse this array using for of loop then log on console just bank name and location`);
  const arrayOfBank = [ axix_bank,sbi_bank, hdfc_bank, kotak_bank, yes_bank,panjab_bank];
  for (const bankDetails of arrayOfBank) {
      console.log(`Bank details are: ${bankDetails.bankName}  ${bankDetails.location} `);
      
  }
  console.log(`------------------------------------------------------------------------------------------------`);
  console.log(`Find the object which has name kotak bank using for of loop`);
  for (const bankDetails of arrayOfBank) {
    if (bankDetails.bankName=="Kotak bank") {
      console.log(bankDetails.bankName,bankDetails.location,bankDetails.account_no,bankDetails.interest_rate); 
        
      }
}
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`log on console bank details using for loop`);
for (let index = 0; index < arrayOfBank.length; index++) {
  const element = arrayOfBank[index];
  console.log(element);
  
}





  
   
  
  