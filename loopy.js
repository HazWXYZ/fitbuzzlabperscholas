
// Part 3: Feeling Loopy

// As a final task, solve the following practical problem regarding string processing.

// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

// CSV data looks like this:

// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:

// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26

//this the first dataset
//let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";


let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let cellIndex = 1;

for (let i = 0; i < csvData.length; i++) {
    let char = csvData[i];

    if (char === '\n') {
        console.log(cell1, cell2, cell3, cell4);

        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
        cellIndex = 1;
        
        continue;
    }

    if (char === ',') {
    
        cellIndex++;
        continue;
    }

    if (cellIndex === 1) {
        cell1 += char;
    } else if (cellIndex === 2) {
        cell2 += char;
    } else if (cellIndex === 3) {
        cell3 += char;
    } else if (cellIndex === 4) {
        cell4 += char;
    }

    if (i === csvData.length - 1) {
        console.log(cell1, cell2, cell3, cell4);
    }
}