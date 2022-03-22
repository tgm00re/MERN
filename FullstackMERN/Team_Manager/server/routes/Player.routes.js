const AuthorController = require('../controllers/Player.controller')


module.exports = function(app){
    app.get('/api/players/', AuthorController.getAllPlayers);
    app.put('/api/players/update/:_id', AuthorController.updatePlayer);
    app.delete('/api/players/delete/:_id', AuthorController.deletePlayer);
    app.post('/api/players/create', AuthorController.createPlayer);
}