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