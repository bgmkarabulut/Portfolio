const toggleBtn = document.getElementById("toggle-btn");
const navLinks = document.querySelector(".nav-links");
const meBtn = document.querySelector(".me-btn");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

meBtn.addEventListener("click", () => {
  window.location.href = "#about";
});
