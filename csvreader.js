import fs from "fs"

export default function readCSV(filename){
    let contents = fs.readFileSync(filename, {encoding: "utf-8",})
    console.log(contents)
}