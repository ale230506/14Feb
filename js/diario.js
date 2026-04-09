// ABRIR MODAL
function abrirModal(img, texto) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalTexto = document.getElementById("modalTexto");

    modal.style.display = "flex";
    modalImg.src = img;
    modalTexto.textContent = texto;
}

// CERRAR MODAL
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// SORPRESA FINAL
function sorpresaFinal() {
    const audio = document.getElementById("musica");

    audio.play().catch(() => {
        console.log("Audio bloqueado por el navegador");
    });

    abrirModal(
        "img/sorpresafinal.png",
        "Anhelo seguir entrelazando mi existencia con la tuya; sin importar los vientos que soplen, te elijo en cada uno de mis días. Eres mi presente más luminoso y la certeza de mi futuro. Sé que el camino pondrá obstáculos ante nosotros, pero los venceremos con la misma valentía con la que hoy nos sostenemos. Eres una mujer excepcional y te amo con una profundidad que no conoce límites. Sueño con que seas la raíz de nuestra familia y, por encima de todo, la compañera que camine a mi lado, mano a mano, para toda la eternidad, TE AMUUUU ❤️",
    );
}