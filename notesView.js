const NotesModel = require('./notesModel');

const model = new NotesModel;

class NotesView{
  constructor(model) {
    this.model = model;
    this.inputEl = document.querySelector('#user-input');
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');
    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.inputEl.value);
      this.displayNotes();
    });
  };
  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach( note => {
    const noteEl = document.createElement('div');
    noteEl.className = ('note');
    noteEl.innerText = note;
    this.mainContainerEl.append(noteEl);
    }) 
  }
}

module.exports = NotesView;