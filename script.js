//Functions
function getBoxCount(e) {
    if(e.key === 'Enter'){
        let boxCount = parseInt(input.value)
        console.log(boxCount)
        populateBoxes(boxCount)
    }
}

function createBox(){
    const newBox = document.createElement("div")
    canvasContainer.appendChild(newBox)
    newBox.classList.add("cell")
}

function deleteBoxes(){
    for(i = canvasContainer.childElementCount; i > 0; i--){
        const cell = document.querySelector(".cell")
        canvasContainer.removeChild(cell)
    }
}

function populateBoxes(count){
    //check if boxes already exist
    if(canvasContainer.childElementCount > 0){
        deleteBoxes()
    }
    //otherwise, populate new boxes 
    for(i = 0; i < count; i++){ 
        createBox()
    }
}

//Variables
const canvasContainer = document.getElementById("canvas-container")
const input = document.querySelector("input")
const cell = document.querySelector(".cell")

//Listener
input.addEventListener("keypress", getBoxCount);

