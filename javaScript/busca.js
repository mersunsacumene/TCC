document.getElementById('search-bar').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.NameRemedies');
    
    products.forEach(function(product) {
        let productName = product.querySelector('.td').innerText.toLowerCase();
        
        if (productName.includes(filter)) {
            product.style.display = 'table-row'; // Use 'table-row' para exibir corretamente nas linhas da tabela
        } else {
            product.style.display = 'none';
        }
    });
});
