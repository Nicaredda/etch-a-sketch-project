
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

function blackPencil() {
    blackP = true;
    rainbowP = false;
    fadingP = false;
    const squares = document.querySelectorAll(".squares");
    for (let s=0;s<squares.length;s++) {
        squares[s].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "rgb(0,0,0)";
        })
    }
}

// Needed for the rainbowPencil function
function randomNumber(){
    let rNum = Math.floor(Math.random() * 255);
    return rNum;
}

function rainbowPencil() {
    blackP = false;
    rainbowP = true;
    fadingP = false;
    const squares = document.querySelectorAll(".squares");
    for (let s=0;s<squares.length;s++) {
        squares[s].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        })
    }
}


function fadingPencil() {
    blackP = false;
    rainbowP = false; 
    fadingP = true;
    const squares = document.querySelectorAll(".squares");
    for (let s=0;s<squares.length;s++) {
        let fNumber = 0.100;
        squares[s].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = `rgba(0,0,0,${fNumber+=0.100})`;
        })
    }
}

function makerGrid() {
    removeGrid();
    for (let n=0;n<inputtedSquares;n++){
        const rows = document.createElement("div");
        rows.className = "rows";
        container.append(rows);
        for (let n=0;n<inputtedSquares;n++){
            squares = document.createElement("div");
            squares.className = "squares";
            squares.style.width = `${960/inputtedSquares}`
            squares.style.height = `${960/inputtedSquares}`
            rows.append(squares);
        } 
    }
}

function removeGrid() {
    const rows = document.querySelectorAll(".rows");
    rows.forEach((row) => row.remove());
}

let blackP = false;
let rainbowP = false;
let fadingP = false;

const btnGrid = document.querySelector("#changeGrid")
btnGrid.addEventListener("click", inputSquare);

const btnRainbow = document.querySelector("#rainbow")
btnRainbow.addEventListener("click", rainbowPencil)

const btnBlack = document.querySelector("#black")
btnBlack.addEventListener("click", blackPencil)

const btnFading = document.querySelector("#fading")
btnFading.addEventListener("click", fadingPencil)

const body = document.querySelector("body");
const container = document.querySelector(".container");





inputSquare();