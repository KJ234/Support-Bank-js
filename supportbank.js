
import fs from "fs"
import readlineSync from "readline-sync"

let contents = fs.readFileSync('./Transactions2014.txt', "utf-8")
console.log (contents)
