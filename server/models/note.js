var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    Note: { type: String, required: [true, 'Empty Field not allowed'], minlength: [3, 'Field must be at least 3 characters long']},
    createdAt: { type: Date, default: Date.now }
})

var Note = mongoose.model('Note', NoteSchema);