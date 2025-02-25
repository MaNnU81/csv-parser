const fs = require("fs");


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
        const character = arrayOfStringRows[i];
        const value = character.split(",");
        splittedValue.push(value);
        }
        return splittedValue;
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
    console.log(arrayOfSplittedRows);

    // const keys = getKeysFromFirsLine(arrayOfSplittedRows);
    // //["name","surname","yob","gender"]
    // const values = getValues(arrayOfSplittedRows);
    // // [["lorenzo","puppo","1995","m"],
    // // ["hugo","martinez","1994","m"],
    // // ["sara","de prà","1989","f"]]
    // const arrayFromEntries = createArrayOfEntries(keys, values);
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
    // const json = convertArrayToJson(arrayFromEntries)
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

    // return json
}


function main(){

    const csvData = readCsvFromFile('./data/test1.csv');

    

    const json = fromCsvToJson(csvData);

    // writeJsonToFile(filePath, json);
    
    
}

main()