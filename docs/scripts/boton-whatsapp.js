function toggleButtonVisibility() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    const whatsappBtn = document.getElementById("whatsappBtn");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
        whatsappBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
        whatsappBtn.style.display = "none";
    }
}

function goToWhatsApp() {
    const phoneNumber = "+573058370733"; // Reemplaza con el número de WhatsApp
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
}
