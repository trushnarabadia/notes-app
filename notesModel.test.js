const NotesModel = require('./notesModel')

describe('NotesModel', () => {
    it('should return an empty array when there are no notes', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });

    it('should return in the array the added notes', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    })
});