const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener('scroll', showToTopBtn);

function showToTopBtn() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBtn.style.display = "block";
        // toTopBtn.style.opacity = 1;
      } else {
        toTopBtn.style.display = "none";
        // toTopBtn.style.opacity = 0;
      }
}
