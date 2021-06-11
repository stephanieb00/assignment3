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
        let fillColumn = newRow.insertCell(-1);//inserts a cell at index 0;
    }//end of for loop.
}
//Adds a column
function addC() {
    alert("Clicked Add Col")
    numCols++;//numCols goes up by one.

    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.

    for (let i = 0; i < grid.rows.length; i++) {
        let newColumn = grid.rows[i].insertCell(grid.rows[i].cells.length);// adds a column to each row that exists.    
    }//end of for loop.
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
    numRows--;//numRows goes down by one.

    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.
    grid.deleteRow(numRows);//deletes the last row
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
    numCols--;//numCols goes down by one.
    
    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.

    for (let i = 0; i < grid.rows.length; i++) {
        grid.rows[i].deleteCell(numCols);// delets a column for each row that exists.
    }//end of for loop.

}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.


    myTD = document.getElementsByTagName("td");
    for (let i = 0; i < myTD.length; i++) {
        myTD[i].addEventListener("click",function(){
            myTD[i].style.background = colorSelected;
        })
    }
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
