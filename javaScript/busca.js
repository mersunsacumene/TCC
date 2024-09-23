document.getElementById('search-bar').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.product-card');
    
    products.forEach(function(product) {
        let productName = product.querySelector('.product-name').innerText.toLowerCase();
        
        if (productName.includes(filter)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
