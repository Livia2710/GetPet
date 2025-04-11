
  // Seleciona todos os botões "Ver mais"
  const toggleButtons = document.querySelectorAll('.toggle-info');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Encontra a div "oculto" dentro do mesmo card
      const card = button.closest('.card');
      const oculto = card.querySelector('.oculto');

      // Alterna a visibilidade
      oculto.style.display = oculto.style.display === 'block' ? 'none' : 'block';

      // (Opcional) Muda o texto do botão
      button.textContent = oculto.style.display === 'block' ? 'Ver menos' : 'Ver mais';
    });
  });


// Lista de produtos
const produtos = [
    {
      nome: "Ração Cachorro",
      imagem: "/img/racao_cachorro.png",
      preco: "R$ 21,55",
      animal: "cachorro",
      categoria: "racao",
      marca: "Dante"
    },
    {
      nome: "Ração Gato",
      imagem: "/img/racao_gato.png",
      preco: "R$ 19,99",
      animal: "gato",
      categoria: "racao",
      marca: "Mia"
    },
    // Adicione todos os produtos aqui
  ];
  
  // Função para criar os cards
  function gerarCards() {
    const container = document.getElementById("produtos-container");
  
    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.className = "card produto";
      card.dataset.animal = produto.animal;
      card.dataset.categoria = produto.categoria;
  
      card.innerHTML = `
        <h2>${produto.nome}</h2>
        <img class="capa" src="${produto.imagem}" alt="">
        <p>${produto.marca}</p>
        <span class="preco">${produto.preco}</span>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Quando a página carregar, gerar os cards e aplicar os filtros
  document.addEventListener("DOMContentLoaded", () => {
    gerarCards();
  
    // Filtros (você pode manter o código que já tinha)
    const urlParams = new URLSearchParams(window.location.search);
    const animal = urlParams.get("animal");
    const categoria = urlParams.get("categoria");
  
    const titulo = document.getElementById("titulo-animal");
    const categoriasDiv = document.getElementById("categorias");
  
    if (animal) {
      titulo.textContent = `Produtos para ${animal}`;
      categoriasDiv.style.display = "block";
  
      document.querySelectorAll('#categorias a').forEach(link => {
        const cat = link.dataset.categoria;
        link.href = `produtos.html?animal=${animal}&categoria=${cat}`;
      });
  
      document.querySelectorAll('.produto').forEach(produto => {
        produto.style.display = (produto.dataset.animal === animal) ? 'block' : 'none';
      });
    }
  
    if (categoria) {
      document.querySelectorAll('.produto').forEach(produto => {
        if (
          produto.dataset.animal !== animal ||
          produto.dataset.categoria !== categoria
        ) {
          produto.style.display = 'none';
        }
      });
    }
  });
  