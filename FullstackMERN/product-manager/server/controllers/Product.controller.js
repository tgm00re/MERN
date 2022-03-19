const {Product} = require("../models/Product.model")

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json({message: "There was an error.", error: err}))
}

module.exports.getSingleProduct = (req, res) => {
    Product.find({_id: req.params.id})
    .then(singleProduct => res.json(singleProduct))
    .catch(err => res.json({message: "There was an error!", error: err}))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}) //{new: true} makes it so we get back the updated product.
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({message: "There was an error", error: err}))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(response => res.json(response))//Response is an object aknowledging that deletion was successful.
        .catch(err => res.json({message: "There was an error!", error: err}))
}

module.exports.createProduct = (req, res) => {
    console.log(req.body);
    const {title, price, description} = req.body;
    Product.create({
        title: title,
        price: price,
        description: description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err))
}