

// the assignment is asking us to make a 16*16 squares grid, 
// therefore we will create 16 rows. Each of the rows is a single container 
// that contains 16 others squares

function inputSquare() {  
    inputtedSquares = prompt("How many squares do you need?");
    if (inputtedSquares<=100){
        makerGrid()
    } else {
        alert("insert a number between 1 and 101") 
        return;
    } 
    return inputtedSquares;
}

function rainbowPencil(squares) {
    function randomNumber(){
        
    }
    let rNum = Math.floor(Math.random() * 255);
    squares.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `rgb(${rNum},${rNum},${rNum})`;
    })
}


function blackPencil(squares) {
    squares.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    })
}

function makerGrid() {
    removeGrid();
    for (let n=0;n<inputtedSquares;n++){
        const rows = document.createElement("div");
        rows.className = "rows";
        container.append(rows);
        for (let n=0;n<inputtedSquares;n++){
            const squares = document.createElement("div");
            squares.className = "squares";
            rainbowPencil(squares);
            rows.append(squares);
        }
    }
}

function removeGrid() {
    const rows = document.querySelectorAll(".rows");
    rows.forEach((row) => row.remove());
}

function program() {
    inputSquare();
    makerGrid();
}

const btnGrid = document.querySelector("#changeGrid")
btnGrid.addEventListener("click", inputSquare);

const btnRainbow = document.querySelector("#rainbow")
btnRainbow.addEventListener("click", rainbowPencil)

const body = document.querySelector("body");
const container = document.querySelector(".container");

program();



