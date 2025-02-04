// Array que almacenará los nombres de los amigos
let amigos = [];

// Agregar un amigo al array
function agregarAmigo() {
    const input = document.getElementById('nombreAmigo');
    const nombre = input.value;

    // Valida que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agrega el nombre al array
    amigos.push(nombre);

    // Limpia el campo de entrada
    input.value = "";

    // Actualiza la lista y la barra de nombres en la interfaz
    actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente

    // Recorrer el array y agregar elementos <li>
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, agregue amigos antes de sortear.");
        return;
    }

    // índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo seleccionado es: ${amigoSorteado}`;
}
