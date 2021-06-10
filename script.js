let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {
    alert("Clicked Add Row")
    numRows++;//numRows goes up by one.

    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.
    let newRow = grid.insertRow(-1);//inserts row at the end of the table.
    // insert table cells to the new row
    for (i = 0; i < numCols; i++) {
        //cells = newRow.insertCell(-1);
        let newColumn = newRow.insertCell(-1);//inserts a cell at index 0;
    }
}
//Adds a column
function addC() {
    alert("Clicked Add Col")
    numCols++;//numCols goes up by one.

    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.

    for (let i = 0; i < numRows; i++) {
        let newColumn = grid.rows[i].insertCell(numRows);      
    }
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
