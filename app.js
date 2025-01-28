let listaAmigos = [];

function insertarTexto(id,texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    listaAmigos.push(amigoIngresado);
    insertarTexto('listaAmigos',listaAmigos);
}