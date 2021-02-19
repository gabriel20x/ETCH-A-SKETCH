let divs=[];
let red=0,green=0,blue=0;
const contenedor = document.querySelector("#contenedor");

function cambiarcolor(celda){
    red = Math.floor(Math.random() * (255.99));
    green = Math.floor(Math.random() * (255.99));
    blue = Math.floor(Math.random() * (255.99));
    divs[celda].style.backgroundColor = `rgb(${red},${green},${blue})`;
}

for (let celda = 0; celda < (16*16); celda++) {
    divs.push(document.createElement("div"));
    divs[celda].setAttribute('id', `div${celda}`);
    divs[celda].setAttribute('class', 'celda');
    divs[celda].addEventListener('mouseover', 
        function () {
        cambiarcolor(celda);
        });
    contenedor.appendChild(divs[celda]);
}
