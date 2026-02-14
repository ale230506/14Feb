const mensajes = document.querySelectorAll(".mensaje");
const audio = document.getElementById("musica");
const boton = document.getElementById("btnPrincipal");

let indice = 0;
let intervalo = null;
let iniciado = false;

/* ===== INICIAR EXPERIENCIA ===== */

function iniciarExperiencia() {

    if (iniciado) return;
    iniciado = true;

    audio.play();

    intervalo = setInterval(() => {

        mensajes[indice].classList.remove("activo");
        indice++;

        if (indice < mensajes.length) {
            mensajes[indice].classList.add("activo");
        } else {
            finalizarExperiencia();
        }

    }, 4000);
}

/* ===== FINAL ===== */

function finalizarExperiencia() {
    clearInterval(intervalo);

    // deja visible el último mensaje
    mensajes[mensajes.length - 1].classList.add("activo");

    // cambia botón con animación
    boton.textContent = "💌 Ver sorpresa";
    boton.classList.add("btn-final");

    boton.onclick = abrirModal;
}

/* ===== MODAL ===== */

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function verificar() {
    const pinCorrecto = "2305"; // CAMBIA TU PIN
    const pinUsuario = document.getElementById("pin").value;

    if (pinUsuario === pinCorrecto) {
        window.location.href = "diario.html";
    } else {
        document.getElementById("error").textContent = "Código incorrecto 💔";
    }
}

/* ===== CREAR PÉTALOS SVG ===== */

const contenedor = document.querySelector(".petalos");

for (let i = 0; i < 25; i++) {
    const petalo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    petalo.setAttribute("viewBox", "0 0 24 24");
    petalo.classList.add("petalo");

    petalo.innerHTML = `
        <path fill="#ff6f91"
        d="M12 2C9 5 5 7 5 12s3 8 7 10c4-2 7-5 7-10s-4-7-7-10z"/>
    `;

    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.animationDuration = (Math.random() * 5 + 5) + "s";
    petalo.style.opacity = Math.random() * 0.6 + 0.4;
    petalo.style.transform = `scale(${Math.random() * 0.8 + 0.5})`;

    contenedor.appendChild(petalo);
}

const luces = document.querySelector(".luces");

for (let i = 0; i < 40; i++) {
    const luz = document.createElement("div");
    luz.classList.add("luz");

    luz.style.left = Math.random() * 100 + "vw";
    luz.style.animationDuration = (Math.random() * 6 + 6) + "s";
    luz.style.opacity = Math.random();

    luces.appendChild(luz);
}
