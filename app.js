let amigos = [];
let input = document.querySelector("input");
let btnAgregar = document.querySelector("#btnAgregar");
let btnSortear = document.querySelector("#btnSortear");
let ul = document.querySelector("ul");
let resultado = document.getElementById("resultado");

btnAgregar.addEventListener("click", agregarAmigo);
btnSortear.addEventListener("click", sortearAmigo);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevenir el comportamiento predeterminado
    agregarAmigo();
  }
});

function agregarAmigo() {
  let nombre = input.value.trim();

  // Validar que el nombre no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Validar que el nombre sea estrictamente texto y no exceda los 25 caracteres
  if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    alert("El nombre debe contener solo letras y espacios.");
    return;
  }

  if (nombre.length > 25) {
    alert("El nombre no debe exceder los 25 caracteres.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  render();
}

function render() {
  ul.innerHTML = ""; // Limpiar la lista existente
  for (let amigo of amigos) {
    // Iterar sobre el arreglo
    let li = document.createElement("li"); // Crear un nuevo elemento de lista
    li.textContent = amigo; // Asignar el nombre del amigo al elemento de lista
    ul.appendChild(li); // Agregar el elemento de lista a la lista HTML
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
