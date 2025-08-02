// apartado para los formularios de contactos
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

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.getElementById("navbar");

  // Toggle del menú hamburguesa
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Cerrar el menú cuando se hace clic en un enlace
  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Cerrar el menú cuando se hace clic fuera de él
  document.addEventListener("click", (event) => {
    const clickDentroMenu =
      navLinks.contains(event.target) || hamburger.contains(event.target);
    if (!clickDentroMenu) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Ocultar nav al hacer scroll hacia abajo + cerrar menú
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Ocultar nav al bajar
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.classList.add("oculto");
    } else {
      navbar.classList.remove("oculto");
    }

    // Cerrar menú si está abierto al hacer scroll hacia abajo
    if (scrollTop > lastScrollTop) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});

// animaciones de aparición y desaparición para las secciones
function mostrarSeccionesScroll() {
  const bloques = document.querySelectorAll(".bloque");
  const triggerPoint = window.innerHeight * 0.95;

  bloques.forEach((bloque) => {
    const top = bloque.getBoundingClientRect().top;
    if (top < triggerPoint) {
      bloque.classList.add("visible");
    } else {
      bloque.classList.remove("visible"); // opcional
    }
  });
}

window.addEventListener("scroll", mostrarSeccionesScroll);
window.addEventListener("load", mostrarSeccionesScroll);