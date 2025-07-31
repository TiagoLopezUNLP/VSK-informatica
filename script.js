// Código JS listo para expandirse si se requiere
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const numero = "5492214086336";
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("menu");

  hamburgerBtn.addEventListener("click", function () {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Cierra el menú si se hace clic fuera
  document.addEventListener("click", function (e) {
    if (!hamburgerBtn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });

  // Cierra el menú al hacer clic en una opción del menú
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      menu.style.display = "none";
    });
  });
});