document.addEventListener('DOMContentLoaded', () => {
    // Sample Product Data
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 },
    ];

    const productList = document.getElementById('product-list');
    if (productList) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Handle Order List Display
    const orderList = document.getElementById('order-list');
    if (orderList) {
        // This will be fetched from the server in a real application
        const orders = [
            { id: 1, productName: 'Product 1', status: 'Shipped' },
            { id: 2, productName: 'Product 2', status: 'Processing' },
        ];
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.innerHTML = `
                <h4>${order.productName}</h4>
                <p>Status: ${order.status}</p>
            `;
            orderList.appendChild(orderItem);
        });
    }
});

// Sample function to add to cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

// Admin Add Product Functionality
document.getElementById('add-product-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = this[0].value;
    const productPrice = this[1].value;
    alert(`Product ${productName} with price $${productPrice} added!`);
});
