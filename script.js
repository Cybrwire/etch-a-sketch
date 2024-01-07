function createGrid(){
    let gridContainer = document.querySelector('.grid-container');
    for(let i = 0; i < (16 * 16); i++) {
        
        let div = document.createElement('div');
        div.classList.add("grid-square");
        gridContainer.appendChild(div);
    }
    //grid square width = 960 / 16 (or user selected number)
    document.querySelectorAll('.grid-square').forEach(square => {
        square.style.width = (960/16) + 'px';
    })

}
function drawPixels(){
    document.querySelectorAll('.grid-square').forEach(square => {
        square.addEventListener('mouseover', (e)=>{
            e.target.classList.add('active');
        }, {
            once: true
        })
    })
}
createGrid();
drawPixels();