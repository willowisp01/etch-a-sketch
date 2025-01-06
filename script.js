let dimension = 17; 
const board = document.querySelector("#board");

let nCells = dimension * dimension; 
let cellPercentage = 1 / dimension * 100; // the percentage of the width / height a cell should occupy 
for (let i = 0; i < nCells; i++) {
    let cell = document.createElement("div");
    cell.classList.add("defaultCell"); 
    cell.style.flexBasis = cellPercentage + "%";
    board.appendChild(cell);
}

board.addEventListener("mouseover", colorGrid)

// click bubbles up from button (which is the target) to board. 
function colorGrid(event) {
    console.log(event.target.classList);
    event.target.style.backgroundColor = "pink"; 
}



// Event Bubbling:
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling
