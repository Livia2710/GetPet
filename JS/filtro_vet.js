document.addEventListener('DOMContentLoaded', () => {
    const buscaNome = document.getElementById('busca-nome');
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    let filtroIcone = 'todos'; // Filtro inicial
  
    // Função para filtrar os cards
    function filtrarCards() {
      const termoBusca = buscaNome.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.card');
  
      cards.forEach(card => {
        const nome = card.querySelector('.cima h2').textContent.toLowerCase();
        const tipo = card.getAttribute('data-tipo');
  
        // Verifica se o card corresponde ao filtro de nome e ícone
        const correspondeNome = termoBusca === '' || nome.includes(termoBusca);
        const correspondeIcone = filtroIcone === 'todos' || tipo === filtroIcone;
  
        // Mostra ou esconde o card
        if (correspondeNome && correspondeIcone) {
          card.classList.remove('escondido');
        } else {
          card.classList.add('escondido');
        }
      });
    }
  
    // Evento de busca por nome
    buscaNome.addEventListener('input', filtrarCards);
  
    // Evento de filtro por ícone
    botoesFiltro.forEach(botao => {
      botao.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os botões
        botoesFiltro.forEach(b => b.classList.remove('ativo'));
        // Adiciona 'ativo' ao botão clicado
        botao.classList.add('ativo');
        // Atualiza o filtro de ícone
        filtroIcone = botao.getAttribute('data-icone');
        // Aplica o filtro
        filtrarCards();
      });
    });
  
    // Inicializa com o botão "Todos" ativo
    document.querySelector('.filtro-btn[data-icone="todos"]').classList.add('ativo');
    filtrarCards();
  });