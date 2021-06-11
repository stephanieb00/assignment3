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

    let myTD = document.getElementsByTagName("td");//get the td element and set it to myTD
    for (let i = 0; i < myTD.length; i++) {
        myTD[i].addEventListener("click",function(){
            myTD[i].style.background = colorSelected;//on click change the background of the cell to the color selected.
        })
    }//end of for loop.

}

function fill(){
    alert("Clicked Fill All")

    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.

    let myTD = grid.getElementsByTagName("td");//get the elements with the td tag.

    for (let i = 0; i < myTD.length; i++) {
        myTD[i].style.backgroundColor = colorSelected;//set all cells to colorSelected.
    }//end of for loop.

    

}

function clearAll(){
    alert("Clicked Clear All")
    let grid = document.getElementById("grid"); //set grid to the table names grid in the HTML.

    let myTD = grid.getElementsByTagName("td");//get the elements with the td tag.

    for (let i = 0; i < myTD.length; i++) {
        myTD[i].style.backgroundColor = "white";//set all cells to colorSelected.
    }//end of for loop.



}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
