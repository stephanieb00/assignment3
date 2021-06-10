let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {
    numRows++;//numRows goes up by one.
    alert("Clicked Add Row")

    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.
    let newRow = grid.insertRow(-1);
    let newColumn = newRow.insertCell(0);
}
//Adds a column
function addC() {
    alert("Clicked Add Col")
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
