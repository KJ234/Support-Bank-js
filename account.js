
// account stores the name, outoging and incoming transaction.

export default class Account {
    constructor(name, incomingTransaction, outgoingTransaction) {
      this.name = name;
      this.incomingTransaction = incomingTransaction = []
      this.outgoingTransaction = outgoingTransaction = []
    }
  

    // push adds elements to the end of an array and returns the new array
    // incoming transaction will now be added to the transaction list 
  addincomingTransaction(transaction){
    this.incomingTransaction.push(transaction)
  }

  // outgoing transaction will now be added to the transaction list 
  addoutgoingTransaction(transaction){
    this.outgoingTransaction.push(transaction)
  }

  
  get balance() {
    // *** add code here to obtain balance
    fromAccount.balance -= transaction.amount;
    if (addoutgoingTransaction === undefined){
        console.log("To account cannot be found");
    }else {
    addincomingTransaction.balance += transaction.amount;
    }
}
  }


                                                                                                     