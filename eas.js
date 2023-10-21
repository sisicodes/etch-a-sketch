/*
initialize the grid to be 24x24
*/
//container information
const container = document.querySelector('.container');
const square_size = 960

//button functionality
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearGrid);

const gridBtn = document.querySelector('#grid');
gridBtn.addEventListener('click', newGrid)

function clearGrid() {
    let gridArray = document.querySelectorAll('.square');
    gridArray.forEach(function(elem) {
        elem.classList.remove('hover');
    })
};

function newGrid() {
    clearGrid();
    let num = prompt('grid size?', 'Choose a number from 1-100');
    if (!(num >=1 && num<=100)) {
        newGrid();
    } else {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(num);
    }
}

//grid functionality
function createGrid(num) {
    let square;
    let dimension = getSquareHeight(num);
    for (let i=0; i<num*num; i++) {
        square = document.createElement('div');
        square.classList.add('square');
        container.append(square);
        square.style.height = dimension;
        square.style.width = dimension;
    }
    let gridArray = document.querySelectorAll('.square');
    gridArray.forEach(function(elem) {
        elem.addEventListener('mouseenter', () => {
            elem.classList.add('hover');
        })
    })
}

//square size functionality
function getSquareHeight(num) {
    let pixelSize = Math.floor(square_size/num);
    return `${pixelSize}px`

}




//initialize website
createGrid(24);

