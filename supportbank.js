
import fs from "fs"

import readlineSync from "readline-sync"

let contents = fs.readFileSync('./Transactions2014.csv', "utf-8")
console.log (contents)


// class for account
// class for transactions - to, form , narrative, amount, the date


let accounts = ["Ben B","Chris W","Dan W",],
index = readlineSync.keyInSelect(accounts, 'Which animal?');
console.log('Ok, ' + accounts[index] + ' has ... pounds in his account.');

