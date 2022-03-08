const NotesModel = require('./notesModel')

describe('NotesModel', () => {
    it('should return an empty array when there are no notes', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });
});