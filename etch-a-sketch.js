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
    createGrids(containerSize,numOfGrids);
}
let sizeButton = document.querySelector("#size");
let gridNumButton = document.querySelector("#num");


let containerSize = 400;
let numOfGrids = 16;
sizeButton.addEventListener("click",()=>{
    containerSize = prompt("Enter Container Size (in px).");
    container.innerHTML = "";
    createGrids(containerSize,numOfGrids)

});
gridNumButton.addEventListener("click",()=>{
    numOfGrids = prompt("Enter Number of Grids (max 100).");
    container.innerHTML = "";
    if(numOfGrids > 100){
        alert("Using 100 grids by default.")
        createGrids(containerSize,100);
    }
    else {
        createGrids(containerSize,numOfGrids);
    }
});
createGrids(400,16);