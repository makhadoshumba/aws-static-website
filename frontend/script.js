const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}