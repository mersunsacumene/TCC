// Função para obter os parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const description = params.get('description');
    return { name, description };
}

// Função para exibir os dados na página
function displayProductInfo() {
    const { name, description } = getQueryParams();
    
    // Exibe os dados no HTML
    document.getElementById('name').textContent = name;
    document.getElementById('description').textContent = description;
}

// Executa a função ao carregar a página
window.onload = displayProductInfo;
