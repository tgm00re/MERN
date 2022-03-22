const AuthorController = require('../controllers/author.controller')


module.exports = function(app){
    app.get('/api/authors/', AuthorController.getAllAuthors);
    app.get('/api/authors/:_id', AuthorController.getAuthorById)
    app.put('/api/authors/update/:_id', AuthorController.updateAuthor);
    app.post('/api/authors/create', AuthorController.createAuthor);
    app.delete('/api/authors/delete/:_id', AuthorController.deleteAuthor);
}