let listaAmigos = [];
ocultarResultado();

function insertarTexto(id,texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}

function insertarLista(id,texto){
    let elementoHTML = document.getElementById(id);
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = texto;
    elementoHTML.appendChild(nuevoElemento); 
}

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if(amigoIngresado == '' || !isNaN(amigoIngresado)){
        alert("Por favor, inserte un nombre");
    }else if(listaAmigos.includes(amigoIngresado)){
        insertarTexto('nuevoAmigo','Por favor, ingrese un nuevo nombre');
    }else{
        listaAmigos.push(amigoIngresado);
        insertarLista('listaAmigos',amigoIngresado);
        limpiarTextos();
        mostrarLista();
        ocultarResultado();
    }
}

function limpiarTextos(){
    document.getElementById('amigo').value = '';
    insertarTexto('nuevoAmigo','');
}

function sortearAmigo(){
    if(listaAmigos.length == 1){
        insertarTexto('nuevoAmigo','Por favor, ingrese un nombre adicional para realizar el sorteo');
    }else{
        ocultarLista();
        let numeroSorteado = Math.floor(Math.random()*listaAmigos.length);
        let amigoGanador = listaAmigos[numeroSorteado];
        insertarTexto('resultado',`El amigo secreto sorteado es: ${amigoGanador}`);
        mostrarResultado();
    }
}

function mostrarLista() {
    document.getElementById('listaAmigos').style.display = "block";
}

function ocultarLista() {
    document.getElementById('listaAmigos').style.display = "none";
}

function mostrarResultado() {
    document.getElementById('resultado').style.display = "block";
}

function ocultarResultado() {
    document.getElementById('resultado').style.display = "none";
}