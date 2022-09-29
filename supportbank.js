
import fs from "fs"
import  csv  from 'csv-parser'

import readlineSync from "readline-sync"

let contents = fs.readFileSync('./Transactions2014.csv', "utf-8")
// console.log (contents)


// class for account
// class for transactions - to, form , narrative, amount, the date


let people = ["Jon A","Stephen S","Laura B","Sam N","Todd","Georgia I","Sarah T","Tim L","Rob S","Ben B","Chris W","Dan W",],
index = readlineSync.keyInSelect(people, 'Which account?');
console.log('Ok, ' + people[index] + ' has ... pounds in his account.');


