var Notes = require('../controllers/notes.js');
var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = function(app) {
    //Get all restaurant
    app.get('/note', function(request, response) {
        Notes.all(request, response)
    })
    //Create a restaurant
    app.post('/note', function(request, response) {
        Notes.create(request, response)
    })
}