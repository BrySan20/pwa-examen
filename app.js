// Simulación de contenido dinámico
const materias = [
    { nombre: "Matemáticas I" },
    { nombre: "Programación Web" },
    { nombre: "Bases de Datos" }
];

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
