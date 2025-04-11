
  const circulos = document.querySelectorAll(".circulo");
  const caixas = document.querySelectorAll(".caixa");
  const caixasSecundarias = document.querySelectorAll(".caixa-secundaria");
  let activeCircle = null; // Para rastrear o círculo ativo

  circulos.forEach((circulo) => {
    circulo.addEventListener("click", () => {
      const boxId = circulo.getAttribute("data-box");
      const boxSecId = circulo.getAttribute("data-box-sec");
      const caixa = document.getElementById(boxId);
      const caixaSecundaria = document.getElementById(boxSecId);

      // Se o círculo clicado já está ativo, esconde ambas as caixas
      if (activeCircle === circulo) {
        caixa.classList.remove("active");
        caixaSecundaria.classList.remove("active");
        activeCircle = null; // Redefinir o círculo ativo
      } else {
        // Esconde todas as caixas
        caixas.forEach((c) => c.classList.remove("active"));
        caixasSecundarias.forEach((cs) => cs.classList.remove("active"));

        // Mostra ambas as caixas correspondentes ao círculo clicado
        caixa.classList.add("active");
        caixaSecundaria.classList.add("active");
        activeCircle = circulo; // Define o círculo ativo

        // Posiciona as caixas abaixo do círculo clicado
        const circuloRect = circulo.getBoundingClientRect();
        caixa.style.left = `${circuloRect.left + window.scrollX}px`;
        caixaSecundaria.style.left = `${circuloRect.left + window.scrollX}px`;
      }
    });
  });

  // Esconde ambas as caixas ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".circulo") && !e.target.closest(".caixa") && !e.target.closest(".caixa-secundaria")) {
      caixas.forEach((caixa) => caixa.classList.remove("active"));
      caixasSecundarias.forEach((cs) => cs.classList.remove("active"));
      activeCircle = null; // Redefinir o círculo ativo
    }
  });
