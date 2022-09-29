import fs from "fs"
import  csv  from 'csv-parser'
import Log4js from "log4js"
import readlineSync from "readline-sync"

let contents = fs.readFileSync('./Transactions2014.csv', "utf-8")

//logging
let logger = Log4js.getLogger('DodgyTransactions2015.csv');

Log4js.configure({
  appenders: {
      file: { type: 'fileSync', filename: 'logs/debug.log' }
  },
  categories: {
      default: { appenders: ['file'], level: 'debug'}
  }
});

// class for account
class Account {
    constructor (name, money) {
        this.name = 'name'
        this.money = 0
    }
}
// class for transactions - to, form , narrative, amount, the date
class Transactions {
    constructor (to, from, narrative, amount, date) {
        this.to = 'to'
        this.from = 'from'
        this.narrative = 'narrative'
        this.date = 'date'
    }
}

// display all people
let people = [ "Ben B",
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

// conversation with the user via a console
index = readlineSync.keyInSelect(people, 'Which Account?');
console.log('Ok, ' + people[index] + " 's ...  transactions now.");
let choice = people[index]

// console all information from .csv file
if (choice === "ALL") {
    console.log(contents);
}

let results = [];

fs.createReadStream('Transactions2014.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    ;
  });


