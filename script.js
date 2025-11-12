// Página 1
if (document.title.includes("Principal")) {
    alert("Bienvenido a mi sitio web 👋");
    let nombre = prompt("Por favor, ingresa tu nombre y apellido:");
    document.getElementById("mensaje").textContent = `¡Hola ${nombre}! Bienvenido a mi sitio.`;
}

// Página 2
if (document.title.includes("Galería")) {
    alert("Bienvenido a la galería 👀");
    let edad = prompt("¿Cuál es tu edad?");
    let mensaje = edad >= 20 ? "Eres mayor de 20 años 👏" : "Eres menor de 20 años 😊";
    document.getElementById("mensaje2").textContent = mensaje;
}

// Funciones generales
function irPagina(pagina) {
    window.location.href = pagina;
}

function mostrarDescripcion() {
    document.getElementById("descripcion").classList.toggle("oculto");
}

// Operaciones (Página 3)
function sumar() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    alert(`El resultado de la suma es: ${a + b}`);
}

function dividir() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    if (b === 0) {
        alert("No se puede dividir entre 0.");
    } else {
        alert(`El resultado de la división es: ${a / b}`);
    }
}

function promediar() {
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    alert(`El promedio es: ${(a + b) / 2}`);
}
