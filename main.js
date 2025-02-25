const { log } = require("console");
const fs = require("fs");
const { json } = require("stream/consumers");


function readCsvFromFile(filePath) {

    const csv = fs.readFileSync(filePath, 'utf8');

    return csv;
}

function splitCsvInRows(csv){
    const splittedLines = csv.split(/\r?\n/);
    return splittedLines;
}


function splitRows(arrayOfStringRows){

    const splittedValue = [];

    for (let i = 0; i < arrayOfStringRows.length; i++) {
        const line = arrayOfStringRows[i];
        const value = line.split(",");
        splittedValue.push(value);
        }
        return splittedValue;
}

function getKeysFromFirsLine(arrayOfSplittedRows){
    const key = arrayOfSplittedRows[0];
    return key
}

function getValues(arrayOfSplittedRows){
    const value = arrayOfSplittedRows.splice(1);
    return value;
}

function createEntry(keys, valuesArray) {
    const obj = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        obj[key] = valuesArray[i];
    }

    return obj;

}

function createArrayOfEntries(keys, values) {
    
    const arrayOfEntries = [];

    for (let i = 0; i < values.length; i++) {
        const valueEntry = values[i];

        const entry = createEntry(keys, valueEntry);

        arrayOfEntries.push(entry);
    }
    return arrayOfEntries;
}

function convertArrayToJson(arrayFromEntries) {
    
    const json = JSON.stringify(arrayFromEntries);
    return json;

}

function fromCsvToJson(csv){
   
    const arrayOfStringRows = splitCsvInRows(csv);
    // ["name,surname,yob,gender",
    //  "lorenzo,puppo,1995,m",
    //  "hugo,martinez,1994,m",
    //  "sara,de prà,1989,f"]
    // console.log(arrayOfStringRows);
    
    const arrayOfSplittedRows = splitRows(arrayOfStringRows);
    
    // // [["name","surname","yob","gender"],
    // // ["lorenzo","puppo","1995","m"],
    // // ["hugo","martinez","1994","m"],
    // // ["sara","de prà","1989","f"]]
    

    const keys = getKeysFromFirsLine(arrayOfSplittedRows);
    // //["name","surname","yob","gender"]



console.log(keys);

    const values = getValues(arrayOfSplittedRows);
    // // [["lorenzo","puppo","1995","m"],
    // // ["hugo","martinez","1994","m"],
    // // ["sara","de prà","1989","f"]]

    console.log(values);

    const arrayFromEntries = createArrayOfEntries(keys, values);

    console.log(arrayFromEntries);
    // // [
    // //     {
    // //         name: "lorenzo",
    // //         surname: "puppo",
    // //         yob: 1995,
    // //         gender: 'm'
    // //     },
    // //     {
    // //         name: "hugo",
    // //         surname: "martinez",
    // //         yob: 1994,
    // //         gender: 'm'
    // //     },
    // //     {
    // //         name: "sara",
    // //         surname: "de pra",
    // //         yob: 1989,
    // //         gender: 'f'
    // //     }
    // // ]
    const jsonFile = convertArrayToJson(arrayFromEntries);
    // // '[
    // //     {
    // //         "name": "lorenzo",
    // //         "surname": "puppo",
    // //         "yob": 1995,
    // //         "gender": 'm'
    // //     },
    // //     {
    // //         "name": "hugo",
    // //         "surname": "martinez",
    // //         "yob": 1994,
    // //         "gender": 'm'
    // //     },
    // //     {
    // //         "name": "sara",
    // //         "surname": "de pra",
    // //         "yob": 1989,
    // //         "gender": 'f'
    // //     }
    // // ]'

    return jsonFile;
}


function main(){

    const csvData = readCsvFromFile('./data/test1.csv');

    const json = fromCsvToJson(csvData);

    writeJsonToFile(filePath, json);

}

main()