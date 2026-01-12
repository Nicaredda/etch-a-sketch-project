const body = document.querySelector("body");
const container = document.querySelector(".container");

// the assignment is asking us to make a 16*16 squares grid, 
// therefore we will create 16 rows. Each of the rows is a single container 
// that contains 16 others squares

let btn = document.querySelector("button")
btn.addEventListener("click", inputSquare);

function inputSquare () {
    inputtedSquares = prompt("How many squares do you need?");
    if inputtedSquares<=100? makerGrid(): alert("insert a number between 1 and 100101"), return;
    return inputtedSquares;
}

function makerGrid () {
    removeGrid();
    for (let n=0;n<inputtedSquares;n++){
        const rows = document.createElement("div");
        rows.className = "rows";
        container.append(rows);
        for (let n=0;n<inputtedSquares;n++){
            const squares = document.createElement("div");
            squares.className = "squares";

            squares.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            })

            rows.append(squares);
        }
    }
}


// Da fixare
function removeGrid() {
    const rows = document.querySelectorAll(".rows");
    rows.forEach((row) => row.remove());
}

function program () {
    inputSquare();
    makerGrid();
}


program();



