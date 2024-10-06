const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

let users = [];
let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];
let orders = [];

// User Registration
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    users.push({ name, email, password });
    res.send('User registered!');
});

// User Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Get Products
app.get('/products', (req, res) => {
    res.json(products);
});

// Add Order
app.post('/order', (req, res) => {
    const { productId, userId } = req.body;
    const product = products.find(p => p.id === productId);
    if (product) {
        orders.push({ productId, userId, status: 'Processing' });
        res.send('Order placed successfully!');
    } else {
        res.status(404).send('Product not found');
    }
});

// Admin: Get Orders
app.get('/admin/orders', (req, res) => {
    res.json(orders);
});

// Admin: Add Product
app.post('/admin/add-product', (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.send('Product added successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
