
//Creates a grid
function displayGrid(size) {
    let sketchpad = document.querySelector('.sketchpad');
    for(let i = 0; i < size; i++){
        let gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        for(let j = 0; j <= size; j++){
            let gridRow = document.createElement('div');
            gridRow.classList.add('grid-row');
            gridRow.style.border = '2px solid black';
            gridRow.innerText = (i*size) + j;
            gridColumn.appendChild(gridRow);

        }
        sketchpad.appendChild(gridColumn);
    }
};

displayGrid(16);