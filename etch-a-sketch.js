function createGrids(containerSize,numOfGrids){
    let container = document.querySelector(".container");
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
        container.appendChild(grid);
    }

}
createGrids(600,20);