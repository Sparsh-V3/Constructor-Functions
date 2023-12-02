"use strict"

function BankAccount(accountNumber, name, type, balance, activeAcc){
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = activeAcc;
}
    
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    if(this.balance >= amount){
        this.balance -= amount;
    }
    else{
        console.log("Insufficient Balance");
    }
}

BankAccount.prototype.checkBalance = function(){
    console.log(`Balance : ${this.balance}`);
}

BankAccount.prototype.isActive = function(){
    if(this.active)
    {
        console.log("The Account is Active.");
    }
    else{
        console.log("The Account is Inactive.");
    }
}

let b1 = new BankAccount(101, "Sparsh", "Savings", 1000, true);
let b2 = new BankAccount(102, "Naveen", "Savings", 1000, false);
let b3 = new BankAccount(103, "Rahul", "Savings", 1000, true);

let accounts = [b1, b2, b3];

function getTotalBalance(accounts){
    var total=0;
    for(let i = 0; i < accounts.length; i++){
        if(accounts[i].active){
            total+=accounts[i].balance;
        }
    }
    console.log(total);
}

getTotalBalance(accounts);

