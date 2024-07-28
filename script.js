let codigo = ["e", "enter","o", "ober", "i", "imes","a", "ai", "u", "ufat"];

function copiarTexto(texto) {
    
    navigator.clipboard.writeText(texto)
        .catch(err => {
            console.error('No se pudo copiar el texto', err);
        });
}

function encriptar() {
    let encriptado = document.getElementById('input').value;    
    let nuevoParrafo = document.createElement('p');
    let btnCopiar = document.createElement('button');
    let division = document.createElement('div');

    for (let i = 0; i < 9; i +=2){
        if(encriptado.includes(codigo[i])){
            encriptado = encriptado.replaceAll(codigo[i], codigo[i+1]);
        }
    }    

    division.className = "nuevo-div";
    btnCopiar.className = "copiar";
    btnCopiar.textContent ="Copiar";
    btnCopiar.onclick = () => copiarTexto(encriptado);
    nuevoParrafo.classList.add('nuevo-parrafo');
    nuevoParrafo.id = 'texto';    
        
    nuevoParrafo.textContent = encriptado; 

    division.appendChild(nuevoParrafo);
    division.appendChild(btnCopiar);
    let contenedorDer = document.querySelector('.der');
    contenedorDer.innerHTML = '';
    contenedorDer.appendChild(division);
}


function desencriptar(){
    let desencriptado = document.getElementById('input').value;
    let nuevoParrafo = document.createElement('p');
    let btnCopiar = document.createElement('button');
    let division = document.createElement('div');

    for(let i = 1; i < 10; i+= 2){
        if(desencriptado.includes(codigo[i])){
            desencriptado = desencriptado.replaceAll(codigo[i], codigo[i-1]);
        }
    }

    division.className = "nuevo-div";
    btnCopiar.className = "copiar";
    btnCopiar.textContent ="Copiar";
    btnCopiar.onclick = () => copiarTexto(desencriptado);
    nuevoParrafo.classList.add('nuevo-parrafo');
    nuevoParrafo.id = 'texto';
   
    nuevoParrafo.textContent = desencriptado; 

    division.appendChild(nuevoParrafo);
    division.appendChild(btnCopiar);
    let contenedorDer = document.querySelector('.der');
    contenedorDer.innerHTML = '';
    contenedorDer.appendChild(division);
}