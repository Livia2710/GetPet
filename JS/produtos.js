async function carregarProdutos() {
  try {
    // Carrega o arquivo JSON
    const resposta = await fetch('../produtos.json');
    const produtos = await resposta.json();
    const container = document.querySelector('.container');

    // Cria todos os cards
    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-animal', produto.animal);
      card.setAttribute('data-categoria', produto.categoria);

      card.innerHTML = `
        <h2>${produto.titulo}</h2>
        <p>${produto.subtitulo}</p>
        <img class="capa" src="${produto.imagem}" alt="${produto.titulo}">
        <span class="preco">${produto.preco}</span>
        <div class="oculto">
          <p>Animal: ${produto.animal.charAt(0).toUpperCase() + produto.animal.slice(1)}</p>
          <p>Categoria: ${produto.categoria.charAt(0).toUpperCase() + produto.categoria.slice(1)}</p>
        </div>
        <button class="toggle-info">Ver mais</button>
      `;

      container.appendChild(card);
    });

    // Adiciona eventos aos botões "Ver mais"
    const toggleButtons = document.querySelectorAll('.toggle-info');
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        const oculto = card.querySelector('.oculto');
        oculto.style.display = oculto.style.display === 'block' ? 'none' : 'block';
        button.textContent = oculto.style.display === 'block' ? 'Ver menos' : 'Ver mais';
      });
    });

    // Aplica a filtragem por URL
    const urlParams = new URLSearchParams(window.location.search);
    const animalSelecionado = urlParams.get('animal');
    const categoriaSelecionada = urlParams.get('categoria');

    if (animalSelecionado) {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.style.display = card.dataset.animal === animalSelecionado ? '' : 'none';
      });

      const titulo = document.getElementById('titulo-animal');
      if (titulo) {
        titulo.textContent = `Produtos para ${animalSelecionado.charAt(0).toUpperCase() + animalSelecionado.slice(1)}`;
      }

      const categoriasDiv = document.getElementById('categorias');
      if (categoriasDiv) {
        categoriasDiv.style.display = 'block';
        document.querySelectorAll('#categorias a').forEach(link => {
          const cat = link.dataset.categoria;
          link.href = `./produtos.html?animal=${animalSelecionado}&categoria=${cat}`;
        });
      }
    }

    if (categoriaSelecionada) {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        if (card.dataset.animal !== animalSelecionado || card.dataset.categoria !== categoriaSelecionada) {
          card.style.display = 'none';
        }
      });
    }

    // Adiciona a filtragem por escrito
    const buscaInput = document.getElementById('busca-produto');
    if (buscaInput) {
      buscaInput.addEventListener('input', () => {
        const termo = buscaInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
          // Verifica se o card já está filtrado por animal/categoria
          const animal = card.dataset.animal;
          const categoria = card.dataset.categoria;
          const titulo = card.querySelector('h2').textContent.toLowerCase();
          const subtitulo = card.querySelector('p').textContent.toLowerCase();

          // Mostra o card apenas se corresponder ao termo e aos filtros da URL (se aplicável)
          const correspondeBusca = termo === '' || 
                                  titulo.includes(termo) || 
                                  subtitulo.includes(termo) || 
                                  animal.toLowerCase().includes(termo);

          const correspondeUrl = (!animalSelecionado || animal === animalSelecionado) &&
                                (!categoriaSelecionada || categoria === categoriaSelecionada);

          card.style.display = correspondeBusca && correspondeUrl ? '' : 'none';
        });
      });
    }

  } catch (erro) {
    console.error('Erro ao carregar os produtos:', erro);
  }
}

// Chama a função ao carregar a página
carregarProdutos();