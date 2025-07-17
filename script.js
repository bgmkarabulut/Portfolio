const toggleBtn = document.getElementById("toggle-btn");
const navLinks = document.querySelector(".nav-links");
const meBtn = document.querySelector(".me-btn");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

meBtn.addEventListener("click", () => {
  window.location.href = "#about";
});
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
