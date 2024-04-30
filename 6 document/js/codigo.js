const contenedor = document.querySelector("#flex-container");
const boton = document.querySelector(".send-button");

let valor = boton.value;
boton.value = valor.toUpperCase();

let contador = 0;
function crearLlave (nombre, modelo, precio){
    contador++;
    img = `<img class="llave-img" src="img/llave.png"></img>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p> Precio: <b>${precio}</b></p>`;
    return [img,nombre, modelo, precio];
}

const changeHidden = (number) => {
    let hidden = document.querySelector(".key-data");
    hidden.value = number;
};

let documentFragment = document.createDocumentFragment();

const llave = crearLlave("Llave 1","modelo x", "33");
for (let i = 1; i <20 ;i ++) {

    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave${i}`,`modelo ${modeloRandom}`,`${precioRandom}`);

    let div = document.createElement("DIV");
    div.addEventListener("click", () => {changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`flex-item${i}`,"flex-item");
    div.innerHTML = llave[0]+llave[1]+ llave[2]+llave[3];
    documentFragment.appendChild(div);
}
contenedor.appendChild(documentFragment);