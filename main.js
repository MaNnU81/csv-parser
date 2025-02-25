
function readCsvFromFile(params) {
    
}

function fromCsvToJson(csv) {
    const arrayOfStringRows = splitCsvInRows(csv);
    const arrayOfSplittedRows = splitRows(arrayOfStringRows);
    const keys = getKeysFromFirstLine(arrayOfSplittedRows);
    const values = getValues(arrayOfSplittedRows);

    const arrayFromCsv = createArrayOfEntries(keys, value);
    const json = convertArrayToJson
    return json
}



function main() {
    
const csvData = readCsvFromFile (filePath);

const json = fromCsvToJson(csvData);

writeJsonToFile(filePath, json);

}

main()