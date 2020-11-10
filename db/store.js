const util = require("util");
const fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Store {
  constructor() {
    this.lastId = 0;
  }
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;
       try {
         parsedNotes = [].concat(JSON.parse(notes))
       }
       catch (err) {
         parsedNotes = [];
       }
       return parsedNotes;
    })
  }
  addNote(note) {
    const {title, text} = note;
    if (!title || !text) {
      throw new Error("Note: 'title' or 'text' required");
    }
    const newNote = {title, text, id: ++this.lastId};
    return this.getNotes()
    .then(notes => [...notes, newNote])
    .then(revisedNotes => this.write(revisedNotes))
    .then( () => newNote);    
    // Get all notes, add the new note, write all the updated notes, return the newNote
  }
  removeNote(id) {
      return this.getNotes()
          .then(notes=> notes.filter(note=> note.id !== parseInt(id)))
          .then(filteredNotes => this.write(filteredNotes));
         // Get all notes, remove the note with the given id, write the filtered notes
  }
}
module.exports = new Store();