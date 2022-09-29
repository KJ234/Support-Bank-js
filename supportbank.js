const logger = log4js.getLogger('DodgyTransactions2015');

log4js.configure({
  appenders: {
      file: { type: 'fileSync', filename: 'logs/debug.log' }
  },
  categories: {
      default: { appenders: ['file'], level: 'debug'}
  }
});


import fs from "fs"
import  csv  from 'csv-parser'

import readlineSync from "readline-sync"

let contents = fs.readFileSync('./Transactions2014.csv', "utf-8")


// class for account

class amount {
    constructor (name, money) {
        this.name = 'name'
        this.money = 0
    }
}

// class for transactions - to, form , narrative, amount, the date

class transactions {
    constructor (to, from, narrative, amount, date) {
        this.to = 'to'
        this.from = 'from'
        this.narrative = 'narrative'
        this.date = 'date'
    }
}

// display all accounts

let accounts = [ "Ben B",
"Rob S",
"Sam N",
"Sarah T",
"Stephan S",
"Chris W",
"Laura B",
"Tim L",
"Dan W",
"Gergana I",
"Todd",
"Jon A",
"ALL",],
index = readlineSync.keyInSelect(accounts, 'Which Account?');
console.log('Ok, ' + accounts[index] + " 's ...  transactions now.");
let choice = accounts[index]

if (choice === "ALL") {
  console.log(contents);
}



const results = [];

fs.createReadStream('Transactions2014.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });

