/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');
 
describe('Notes view', () => {
  it('displays 2 new notes when they are added', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     const model = new NotesModel();
     const notesView = new NotesView(model);
     model.addNote('Trushna');
     model.addNote('Eddie');  
     notesView.displayNotes();
     expect(document.querySelectorAll('div.note').length).toBe(2);
  });

  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const notesView = new NotesView(model);
    const inputEl = document.querySelector('#user-input')
    inputEl.value = 'Makers'
    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();
    expect(document.querySelectorAll('div.note')[0].innerText).toBe('Makers');
  });

  it('displays the right number of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const notesView = new NotesView(model);
    const inputEl = document.querySelector('#user-input')
    inputEl.value = 'Makers'
    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();
    inputEl.value = 'Makers'
    buttonEl.click();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });
});