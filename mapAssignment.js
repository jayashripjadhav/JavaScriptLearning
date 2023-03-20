console.log(`Create class with all possible data member and should be initilized using constructer`);
class Bank {
    constructor(bankName, location,account_no,ifsc,interest_rate) {
      this.bankName = bankName;
      this.location = location;
      this.account_no =account_no;
      this.ifsc=ifsc;
      this.interest_rate = interest_rate;
    }
  }
  const axix_bank = new Bank ( "Axix bank", "Viman nagar",6566243165233,"AXB0000543","8%");
  const sbi_bank = new Bank("State bank of india","Pune",216336335233,"SbI00000343","10%");
  const hdfc_bank = new Bank("HDFC bank","Mumbai",5642153145202,"HDFC00000353","12%");
  const kotak_bank = new Bank( "Kotak bank","Katraj Pune",264232145321,"KOTAK00000253","14%");
  const yes_bank = new Bank( "Yes bank","Dekkan Pune",2642265214532,"YES00000563","12%");
  const panjab_bank = new Bank( "Panjab bank"," Dehu Pune",5212265214532,"PAN00002564","13%");
  console.log(`Initilization using constructor `); 
  console.log(axix_bank);
   console.log(sbi_bank);
   console.log(hdfc_bank);
   console.log(kotak_bank);
   console.log(yes_bank);
   console.log(panjab_bank);
  console.log(`------------------------------------------------------------------------------------------`);
  console.log(`key -> account_no and value -> bank`);
  const mapOfBank = new Map(); // key -> account_no and value -> bank
  mapOfBank.set(6566243165233,axix_bank);
  mapOfBank.set(216336335233,sbi_bank);
  mapOfBank.set(5642153145202,hdfc_bank);
  mapOfBank.set(264232145321,kotak_bank);
  mapOfBank.set(2642265214532,yes_bank);
  mapOfBank.set(5212265214532,panjab_bank);
  
  const keyOfMapBank = mapOfBank.keys();
    console.log(keyOfMapBank);
    console.log(`---------------------------------------------------------------------------------------------`);
    console.log(`Traverse the map and Log on console bankName,accountNo and interest rate`);
    for (const key of keyOfMapBank) {
        const bank = mapOfBank.get(key);
        console.log(bank.bankName,bank.account_no,bank.interest_rate);
    }

