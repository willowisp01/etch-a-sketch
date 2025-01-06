let dimension = 17; 
const board = document.querySelector("#board");

for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div"); 
    row.classList.add("row");
    for (let j = 0; j < dimension; j++) {
        let cell = document.createElement("div"); 
        cell.classList.add("defaultCell");
        row.appendChild(cell);
    }
    board.appendChild(row);
}


// click bubbles up from button (which is the target) to board. 
board.addEventListener("click", (event) => {
    console.log(event.target.classList);
    // if (event.target.classList.contains("defaultCell")) {
        event.target.style.backgroundColor = "pink"; 
    // }
})

// Event Bubbling:
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling
