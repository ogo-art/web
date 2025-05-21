document.addEventListener("DOMContentLoaded", function () {
    // Reiniciar animació fade-in
    document.body.classList.remove('fade-in');
    void document.body.offsetWidth;
    document.body.classList.add('fade-in');

    // Linterna
  document.body.classList.add('linterna');
  document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty('--x', `${x}px`);
    document.body.style.setProperty('--y', `${y}px`);
  });

});

let slideIndex = 1;
showSlides(slideIndex);

// Controls per avançar o retrocedir
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controls per clicar una miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Inicialitzem el slider en carregar la pàgina
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});
