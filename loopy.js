
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

//this the first dataset:
//let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// second data set to test code on
let str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";


// Variables - to store data
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
// Tracks number of commas encountered in the current row / which cell we are on
let commas = 0;

// Looped over entire string.
for (let i = 0; i < str.length; i++) {
  // Saving value current char at the current index into a variable to make easier to use.
  let current = str[i];

  if (current == ",") {
    // Move to the next cell
    commas++;
  } else if (current == "\n") {
    // **Action 1: Log the completed row**
    console.log(cell1, cell2, cell3, cell4);

    // **Action 2: Print all cells & reset cell/comma values for next line**
    commas = 0;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    // For all other chars (data)
    // Add data to the correct cell based on the number of commas seen
    if (commas == 0) {
      // If 0 commas, add current char to the first cell
      cell1 += current;
    } else if (commas == 1) {
      cell2 += current;
    } else if (commas == 2) {
      cell3 += current;
    } else {
      cell4 += current;
    }
  }
}


if (cell1.length > 0) {
    // Check if the last row actually contains data before logging
    console.log(cell1, cell2, cell3, cell4);
}