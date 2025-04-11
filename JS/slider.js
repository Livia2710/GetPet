  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");
  const totalSlides = slides.length;

  function showSlide(index) {
    // Remove a classe active de todos os slides e indicadores
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Adiciona a classe active ao slide e indicador atual
    slides[index].classList.add("active");
    indicators[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Volta ao primeiro slide se estiver no último
    showSlide(currentSlide);
  }

  // Inicia o slider automaticamente
  function startSlider() {
    setInterval(nextSlide, 7000); // Troca a cada 5 segundos
  }

  // Mostra o primeiro slide ao carregar
  showSlide(currentSlide);

  // Inicia o slider
  startSlider();

  // Adiciona evento de clique nos indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });


