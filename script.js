const toggleBtn = document.getElementById("toggle-btn");
const navLinks = document.querySelector(".nav-links");
const meBtn = document.querySelector(".me-btn");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

meBtn.addEventListener("click", () => {
  window.location.href = "#about";
});
function openGallery(images) {
  const modal = document.getElementById("modal");
  const container = document.getElementById("modal-images");
  container.innerHTML = "";

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
  });

  modal.style.display = "block";
}

function closeGallery() {
  document.getElementById("modal").style.display = "none";
}
