function bankAccount(){
    this.accountNumber,
    this.accountHolderName,
    this.accountBalance,
    this.saving = function(isSalary){
        this.isSalary = isSalary;
      
    },

    this.current = function(odLimit){
        this.odLimit = odLimit;
    },

    this.withdraw = function(amount){
        if( this.accountBalance-amount == 0){
            console.log("Balance below withdrawing limit");
         }
        else{
            this.accountBalance = this.accountBalance-amount;
            console.log("amount is debited from your Account no. " +this.accountNumber)
        }
    }

    this.getCurrentBalance = function(){
        console.log("Current Balance is  "+this.accountBalance);
    }
}

var savingsAccount = new bankAccount();
savingsAccount.accountNumber = 101;
savingsAccount.accountHolderName = "Shaunak Amble";
savingsAccount.accountBalance = 10000;
console.log( savingsAccount.accountHolderName +" Account balance in savings account "+ savingsAccount.accountBalance)


var currentAccount = new bankAccount();
currentAccount.accountNumber = 102;
currentAccount.accountHolderName = "Rahul Bapat";
currentAccount.accountBalance = 20000;
console.log(currentAccount.accountHolderName +" Account balance in current account " +currentAccount.accountBalance)

savingsAccount.withdraw(5000);
savingsAccount.getCurrentBalance();

currentAccount.withdraw(10000);
currentAccount.getCurrentBalance();