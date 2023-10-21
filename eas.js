const container = document.querySelector('.container');

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearGrid);

const gridBtn = document.querySelector('#grid');
gridBtn.addEventListener('click', newGrid)

function createGrid(num) {
    let row;
    let square;
    for (let i=0; i<num; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
        //test= document.createElement('div');

        for (let j=0; j<num; j++) {
            square= document.createElement('div');
            square.classList.add('square');
            square.classList.add(`column${j+1}`)
            row.append(square);
            let gridArray = document.querySelectorAll('.square');
            gridArray.forEach(function(elem) {
                elem.addEventListener('mouseenter', () => {
                    elem.classList.add('hover');
    })
})
        }

    }
}


function clearGrid() {
    let gridArray = document.querySelectorAll('.square');
    gridArray.forEach(function(elem) {
        elem.classList.remove('hover');
    })
};

function newGrid() {
    clearGrid();
    let num = prompt('grid size?', 'Choose a number from 1-100');
    let gridArray = document.querySelectorAll('.square');
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(num);
}


//initialize website
createGrid(20);

