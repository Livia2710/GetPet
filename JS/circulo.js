function toggleCaixa(element) {
    // Encontra a caixa dentro do círculo clicado
    const caixa = element.querySelector('.caixa');
    
    // Alterna entre mostrar e esconder a caixa
    if (caixa.style.display === 'none' || caixa.style.display === '') {
        // Fecha todas as outras caixas primeiro
        document.querySelectorAll('.caixa').forEach(c => {
            c.style.display = 'none';
        });
        caixa.style.display = 'block';
    } else {
        caixa.style.display = 'none';
    }
}