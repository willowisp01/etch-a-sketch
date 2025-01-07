// Initialize variables and constants

const DEFAULT_DIMENSION = 15;
let dimension = DEFAULT_DIMENSION;
let isMouseDown = false; 

const body = document.querySelector("body");
const board = document.querySelector("#board");
const sizeButton = document.querySelector("#size-button"); 
const resetButton = document.querySelector("#reset-button");

// Initialize Grid 

loadGrid(dimension);

// Grid functions and listeners

function loadGrid(dimension) {
    clearGrid();
    let nCells = dimension * dimension; 
    let cellPercentage = 1 / dimension * 100; // the percentage of the width / height a cell should occupy 
    for (let i = 0; i < nCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("defaultCell"); 
        cell.style.flexBasis = cellPercentage + "%";
        cell.addEventListener("dragstart", (event) => {
            event.preventDefault(); // Completely disable drag for this element
        });
        board.appendChild(cell);    
    }
}

function clearGrid() {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}


// Mouse functions and listeners

body.addEventListener("mousedown", () => {
    isMouseDown = true;
    console.log(isMouseDown);
})
body.addEventListener("mouseup", () => {
    isMouseDown = false;
    console.log(isMouseDown);
})

board.addEventListener("mousedown", colorGrid);
board.addEventListener("mouseover", (event) => {
    if (isMouseDown) {
        colorGrid(event);
    }
});


// Coloring functions and listeners

// Event Bubbling:
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling
// click bubbles up from button (which is the target) to board. 
function colorGrid(event) {
    if (event.target.classList.contains("defaultCell")) {
        event.target.style.backgroundColor = getRandomColor();
        let cellOpacity = event.target.style.opacity;
        cellOpacity = parseFloat(cellOpacity || 0) + 0.10; // https://stackoverflow.com/questions/2802055/what-does-the-construct-x-x-y-mean
        event.target.style.opacity = cellOpacity;
    }
}

function getRandomColor() {
    // there are 16777215 different possible hexadecimal colors.
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0"); 
}

// Button functions and listeners

resetButton.addEventListener("click", () => {
    clearGrid();
    loadGrid(dimension);
})

sizeButton.addEventListener("click", () => {
    let input = -1;
    let valid = false; 
    do {
        input = +prompt("Please enter a number between 1 and 50 (inclusive)")
        if (input < 1) {
            alert("Number too low")
        } else if (input > 50) {
            alert("Number too high!")
        } else if (!Number.isInteger(input)) {
            alert("Not an integer");
        } else {
            valid = true;
            dimension = input;
            loadGrid(dimension);
        }
    } while (!valid);
})

// Git basics
// https://www.youtube.com/watch?v=BIjrKuJGTxw

// What to do if you've been making changes on the wrong branch?
// https://stackoverflow.com/questions/22082307/git-switch-branch-without-discarding-local-changes

