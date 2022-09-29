const logger = log4js.getLogger('<filename>');

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
console.log (contents)


// class for account
// class for transactions - to, form , narrative, amount, the date


let accounts = ["Ben B","Chris W","Dan W",],
index = readlineSync.keyInSelect(accounts, 'Which animal?');
console.log('Ok, ' + accounts[index] + ' has ... pounds in his account.');



const results = [];

fs.createReadStream('Transactions2014.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });


  