const ProductController = require('../controllers/Product.controller')

module.exports = function(app){
    app.get('/api/products/', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getSingleProduct);
    app.post('/api/products/create', ProductController.createProduct);
}