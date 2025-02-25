const { log } = require("console");
const fs = require("fs");
const { json } = require("stream/consumers");

function readCsvFromFile(filePath) {
    const csv = fs.readFileSync(filePath, 'utf8');
    return csv;
}

function splitCsvInRows(csv) {
    const splittedLines = csv.split(/\r?\n/);
    return splittedLines
}

function splitRows(arrayOfStringRows) {
    const splittedValue = [];

    for (let i = 0; i < arrayOfStringRows.length; i++) {
        const line = arrayOfStringRows[i];
        const value = line.split(",");
        splittedValue.push(value);
    }
    return splittedValue
}

function getKeysFromFirstLine(arrayOfSplittedRows) {
    const key = (arrayOfSplittedRows[0]);
    return key
}

function getValues(arrayOfSplittedRows) {
    const  value = arrayOfSplittedRows.slice(1);
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

function fromCsvToJson(csv) {
    
    const arrayOfStringRows = splitCsvInRows(csv);
    const arrayOfSplittedRows = splitRows(arrayOfStringRows);
    const keys = getKeysFromFirstLine(arrayOfSplittedRows);
    const values = getValues(arrayOfSplittedRows);
    const arrayFromEntries = createArrayOfEntries(keys, values);
    const jsonFile = convertArrayToJson(arrayFromEntries);
return jsonFile;
}

function writeJsonToFile(filePath, content){
    fs.writeFileSync(filePath, content)
}

function main() {
    
    const csvData = readCsvFromFile('./data/test1.csv');
    const json = fromCsvToJson(csvData);
    console.log(json);
    writeJsonToFile('./output/test1.json', json);   //copilot
}

main()