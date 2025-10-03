// Simulación de contenido dinámico
const materias = [
  { nombre: "Aplicaciones web progresivas" },
  { nombre: "Desarrollo de videojuegos" },
  { nombre: "Bases de Datos" }
];

function mostrarInicio() {
  document.getElementById("contenido").innerHTML = "<p>Bienvenido a la app de Mi Universidad</p>";
}

function cargarMaterias() {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "<h2>Materias inscritas</h2><ul>" +
    materias.map(m => `<li>${m.nombre}</li>`).join("") +
    "</ul>";
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("Error SW:", err));
}
