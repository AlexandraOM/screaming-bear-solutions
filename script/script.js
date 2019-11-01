const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener('scroll', showToTopBtn);

function showToTopBtn() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBtn.style.display = "block";
      } else {
        toTopBtn.style.display = "none";
      }
}
