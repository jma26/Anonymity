var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    all: function(request, response) {
        Note.find({}).sort('-createdAt').exec(function(err, result) {
            if (err) {
                response.json(err);
            } else {
                response.json(result);
            }
        })
    },
    create: function(request, response) {
        console.log(request.body.notes);
        var note = new Note({Note: request.body.notes});
        note.save(function(err, result) {
            if (err) {
                response.json(err);
            } else {
                console.log('Successful creation');
                Note.find({}).sort('-createdAt').exec(function(err, result) {
                    if (err) {
                        response.json(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    }
}