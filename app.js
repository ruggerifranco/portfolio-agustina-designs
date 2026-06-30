// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ANIMACION SCROLL
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// FILTRO PROYECTOS
const botones = document.querySelectorAll(".filtro-btn");
const proyectos = document.querySelectorAll(".proyecto-card");

botones.forEach(btn => {
  btn.addEventListener("click", () => {

    const filtro = btn.dataset.filtro;

    proyectos.forEach(proyecto => {
      const techs = proyecto.dataset.tech || "";

      if (filtro === "all" || techs.includes(filtro)) {
        proyecto.parentElement.style.display = "block"; // mostramos la columna
      } else {
        proyecto.parentElement.style.display = "none";
      }
    });

    botones.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
