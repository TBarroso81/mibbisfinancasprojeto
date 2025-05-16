// Script para animações suaves e interações com a rolagem
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");

  // Adicionando animação ao clicar nos links de navegação
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth"
      });
    });
  });
});
