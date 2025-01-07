let dimension = 17; 
const board = document.querySelector("#board");

function loadGrid(dimension) {
    clearGrid();
    let nCells = dimension * dimension; 
    let cellPercentage = 1 / dimension * 100; // the percentage of the width / height a cell should occupy 
    for (let i = 0; i < nCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("defaultCell"); 
        cell.style.flexBasis = cellPercentage + "%";
        board.appendChild(cell);    
    }
}

function clearGrid() {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

loadGrid(dimension);


board.addEventListener("mouseover", colorGrid);

// Event Bubbling:
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling
// click bubbles up from button (which is the target) to board. 
function colorGrid(event) {
    console.log(event.target);
    console.log(event.target.classList);
    if (event.target.classList.contains("defaultCell")) {
        event.target.style.backgroundColor = getRandomColor();
    }
    let cellOpacity = event.target.style.opacity;
    cellOpacity = parseFloat(cellOpacity || 0) + 0.10;
    event.target.style.opacity = cellOpacity;
}

function getRandomColor() {
    // there are 16777215 different possible hexadecimal colors.
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0"); 
}

const button = document.querySelector("button"); 
button.addEventListener("click", () => {
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