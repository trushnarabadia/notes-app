const NotesModel = require('./notesModel');
const model = new NotesModel();
console.log(model.getNotes());

const NotesView = require('./notesView');
const notesView = new NotesView(model);
notesView.displayNotes();