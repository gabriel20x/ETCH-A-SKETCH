let div, newGridSize=16;
let red=0,green=0,blue=0;
const container = document.querySelector("#container");

function colorChange(event){
    red = Math.floor(Math.random() * (255.99));
    green = Math.floor(Math.random() * (255.99));
    blue = Math.floor(Math.random() * (255.99));
    event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function gridSize(size){
    document.getElementById('container').style.gridTemplateColumns= `repeat(${size},1fr)`;
    document.getElementById('container').style.gridTemplateRows= `repeat(${size},1fr)`;
    for (let cell = 0; cell < (size*size); cell++) {
        div = document.createElement("div");
        div.setAttribute('id', `div${cell}`);
        div.setAttribute('class', 'cell');
        div.addEventListener('mouseover', 
            colorChange);
        container.appendChild(div);
    }
}

// Inicializo un grid de 16*16 divs.
gridSize(16);

function changeGridSize(){
    newGridSize = parseInt(prompt("¿De que tamaño quieres que sea la nueva cuadricula?, coloque un número entre 1 - 100",16));
    newGridSize = sizeComprobation(newGridSize);
    document.getElementById('container').innerHTML='';
    gridSize(newGridSize);
}

function sizeComprobation(newGridSize){
    do {
        if (typeof(newGridSize)=="number") {
            if (newGridSize>0 && newGridSize<=100) {
                return newGridSize;
            } else {
                newGridSize = parseInt(prompt("valor númerico fuera del rango. Debe de colocar un número entre 1 - 100",16));        
            }
        } else {
            newGridSize = parseInt(prompt("Debe colocar un valor númerico entre 1 - 100",16));
        }
    } while (true);
}

