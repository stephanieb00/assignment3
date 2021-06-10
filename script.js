let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {
    numRows++;//numRows goes up by one.
    alert("Clicked Add Row")

    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.
    let added_row = document.createElement("tr");
    added_row.classList.add("new-row");
    grid.appendChild(added_row);

    for (let i = 0; i < numCols; i++) {
        added_row.appendChild(createCell("new-row"));
    }//end of for loop
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
