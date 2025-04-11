document.addEventListener("DOMContentLoaded", function () {
    // Captura os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const animalSelecionado = urlParams.get("animal");

    if (animalSelecionado) {
        const produtos = document.querySelectorAll(".card");

        produtos.forEach(produto => {
            // Esconde os produtos que não correspondem ao filtro
            if (produto.dataset.animal !== animalSelecionado) {
                produto.style.display = "none";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const animal = urlParams.get("animal");
    const categoria = urlParams.get("categoria");

    const titulo = document.getElementById("titulo-animal");
    const categoriasDiv = document.getElementById("categorias");

    if (animal) {
        // Mostrar título e categorias
        titulo.textContent = `Produtos para ${animal}`;
        categoriasDiv.style.display = "block";

        // Atualizar links para incluir o animal e categoria na URL
        document.querySelectorAll('#categorias a').forEach(link => {
            const cat = link.dataset.categoria;
            link.href = `produtos.html?animal=${animal}&categoria=${cat}`;
        });

        // Mostrar apenas os produtos do animal
        document.querySelectorAll('.produto').forEach(produto => {
            produto.style.display = (produto.dataset.animal === animal) ? 'block' : 'none';
        });
    }

    if (categoria) {
        // Filtrar ainda mais pela categoria
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
