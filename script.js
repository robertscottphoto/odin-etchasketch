//Functions
function getBoxCount(e) {
    if(e.key === 'Enter'){
        let boxCount = parseInt(input.value)
        if (boxCount > 100 || boxCount < 1){
            alert("Pick a value between 1 and 100")
        }
        else{
            const gridSize = boxCount * boxCount
            populateBoxes(gridSize, cellSize(boxCount))
        }
    }
}

function cellSize(boxTotal){
    return (960 / boxTotal) - 0.01
}

function createBox(size){
    const newBox = document.createElement("div")
    canvasContainer.appendChild(newBox)
    newBox.classList.add("cell")
    newBox.style.flexBasis =`${size}px`
}

function deleteBoxes(){
    for(i = canvasContainer.childElementCount; i > 0; i--){
        const cell = document.querySelector(".cell")
        canvasContainer.removeChild(cell)
    }
}

function populateBoxes(count, boxSize){
    //check if boxes already exist
    if(canvasContainer.childElementCount > 0){
        deleteBoxes()
    }
    //otherwise, populate new boxes 
    for(i = 0; i < count; i++){ 
        createBox(boxSize)
    }
}

//Variables
const canvasContainer = document.getElementById("canvas-container")
const input = document.querySelector("input")
const cell = document.querySelector(".cell")

//Listener
input.addEventListener("keypress", getBoxCount);

