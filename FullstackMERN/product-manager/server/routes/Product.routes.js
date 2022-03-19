const ProductController = require('../controllers/Product.controller')

module.exports = function(app){
    app.get('/api/products/', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getSingleProduct);
    app.post('/api/products/create', ProductController.createProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
    app.put('/api/products/update/:id', ProductController.updateProduct)
}