let container = document.querySelector(".container");
function createGrids(containerSize,numOfGrids){    
    container.innerHTML = "";
    let totalSquares = numOfGrids * numOfGrids;
    let gridSize = containerSize / numOfGrids;

    Object.assign(container.style,{
        width: `${containerSize}px`,
        height:`${containerSize}px`
    });
    for(let i = 0 ; i < totalSquares; i++){
        let grid = document.createElement('div');
        grid.classList.add('canvas');
        Object.assign(grid.style,{
            width: `${gridSize}px`,
            height: `${gridSize}px`
        });
        grid.addEventListener("mouseover", () =>{
            grid.style.backgroundColor = "burlywood";
        });
        container.appendChild(grid);
    }
    let squares = document.querySelectorAll('.canvas');
}

function clearAll(){
    container.innerHTML = "";
    createGrids(400,16);
}
createGrids(400,16);