const mensajes = document.querySelectorAll(".mensaje");
const audio = document.getElementById("musica");
const boton = document.getElementById("btnPrincipal");
const modal = document.getElementById("modal");

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

        if (indice >= mensajes.length) {
            finalizarExperiencia();
            return;
        }

        mensajes[indice].classList.add("activo");

    }, 4000);
}

/* ===== FINAL ===== */

function finalizarExperiencia() {
    clearInterval(intervalo);

    mensajes[mensajes.length - 1].classList.add("activo");

    boton.textContent = "💌 Ver sorpresa";
    boton.classList.add("btn-final");
    boton.onclick = abrirModal;
}

/* ===== MODAL ===== */

function abrirModal() {
    modal.classList.add("activo");
}

function cerrarModal() {
    modal.classList.remove("activo");
}

function verificar() {
    const pinCorrecto = "2305";
    const pinUsuario = document.getElementById("pin").value;

    if (pinUsuario === pinCorrecto) {
        window.location.href = "diario.html";
    } else {
        document.getElementById("error").textContent = "Código incorrecto 💔";
    }
}

/* ===== PÉTALOS ===== */

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

/* ===== LUCES ===== */

const luces = document.querySelector(".luces");

for (let i = 0; i < 40; i++) {
    const luz = document.createElement("div");
    luz.classList.add("luz");

    luz.style.left = Math.random() * 100 + "vw";
    luz.style.animationDuration = (Math.random() * 6 + 6) + "s";
    luz.style.opacity = Math.random();

    luces.appendChild(luz);
}
