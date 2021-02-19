let divs=[];
const contenedor = document.querySelector("#contenedor");
const colores = ["#ff00ff","#800000","#66cdaa","#0000cd","#dc143c","#00ffff"];

function cambiarcolor(celda){
    divs[celda].style.backgroundColor='blue';
}

for (let celda = 0; celda < (16*16); celda++) {
    divs.push(document.createElement("div"));
    divs[celda].setAttribute('id', `div${celda}`);
    divs[celda].setAttribute('class', 'celda');
    divs[celda].addEventListener("hover",cambiarcolor(celda))
    contenedor.appendChild(divs[celda]);
}
