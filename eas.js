
const container = document.querySelector('.container');

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
            //square.addEventListener('mouseenter', () => {
            //    square.classList.add('hover');
            //})
            row.append(square);
        }


    }
}
createGrid(16);
let gridArray = document.querySelectorAll('.square');
gridArray.forEach(function(elem) {
    elem.addEventListener('mouseenter', () => {
        elem.classList.add('hover');
    })
})
