function setGrid(size = 16){
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    for(let i = 0; i < (size * size); i++) {
        
        let div = document.createElement('div');
        div.classList.add("grid-square");
        gridContainer.appendChild(div);
    }
    //grid square width = 960 / 16 (or user selected number)
    document.querySelectorAll('.grid-square').forEach(square => {
        square.style.width = (960/size) + 'px';
        square.style.height = (960/size) + 'px';
    })
    drawPixels();
}

function drawPixels(){
    document.querySelectorAll('.grid-square').forEach(square => {
        square.addEventListener('mouseover', (e)=>{
            e.target.classList.add('active');
        })
    })
}
function changeSize(){
    let input;
    do {
        input = parseInt(prompt("How big do you want the grid to be? Enter a number from 1 - 100: "));
    }
    while(input > 100 || input < 1)
    setGrid(input);
}
function resetGrid(){
    document.querySelectorAll('.grid-square').forEach(square => {
        square.classList.remove('active');
    })
}
setGrid();
