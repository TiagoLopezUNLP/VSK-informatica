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

  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add("oculto");
  } else {
    navbar.classList.remove("oculto");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
  