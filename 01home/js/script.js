document.addEventListener("DOMContentLoaded", function () {
  // Reiniciar animació fade-in
  document.body.classList.remove('fade-in');
  void document.body.offsetWidth;
  document.body.classList.add('fade-in');

  // Carrusels múltiples genèrics (per .carrusel-container)
  document.querySelectorAll('.carrusel-container').forEach(container => {
    const track = container.querySelector('.carrusel-track');
    const btnIzq = container.querySelector('.flecha.izquierda');
    const btnDer = container.querySelector('.flecha.derecha');

    let currentIndex = 0;

    btnDer?.addEventListener('click', () => {
      if (currentIndex < track.children.length - 1) {
        currentIndex++;
        updateCarrusel();
      }
    });

    btnIzq?.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarrusel();
      }
    });

    function updateCarrusel() {
      const offset = -track.children[0].offsetWidth * currentIndex;
      track.style.transform = `translateX(${offset}px)`;
    }
  });

  // Carrusel 1 (amb classes diferents)
  document.querySelectorAll('.carrusel-container1').forEach(container => {
    const track = container.querySelector('.carrusel-track1');
    const btnIzq = container.querySelector('.flecha1.izquierda1');
    const btnDer = container.querySelector('.flecha1.derecha1');

    let currentIndex = 0;

    btnDer?.addEventListener('click', () => {
      if (currentIndex < track.children.length - 1) {
        currentIndex++;
        updateCarrusel1();
      }
    });

    btnIzq?.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarrusel1();
      }
    });

    function updateCarrusel1() {
      const offset = -track.children[0].offsetWidth * currentIndex;
      track.style.transform = `translateX(${offset}px)`;
    }
  });

  // Cub OGO
  let rotX = 0;
  let rotY = 0;
  const cub = document.querySelector(".cub");

  window.dalt = function () {
    rotX += 90;
    updateCubeRotation();
  };

  window.baix = function () {
    rotX -= 90;
    updateCubeRotation();
  };

  window.esquerra = function () {
    rotY += 90;
    updateCubeRotation();
  };

  window.dreta = function () {
    rotY -= 90;
    updateCubeRotation();
  };

  function updateCubeRotation() {
    cub.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  // Linterna
  document.body.classList.add('linterna');
  document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty('--x', `${x}px`);
    document.body.style.setProperty('--y', `${y}px`);
  });
});
