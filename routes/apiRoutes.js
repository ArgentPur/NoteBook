const router = require("express").Router();
const store = require("../db/store")


router.get("/notes", (req, res) => {
    store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
    // will utilize the getNMotes() function
})

router.post("/notes/:id", (req, res) => {
    // this is the POST route where your will you 
    store
    .addNote(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
    
    // will utilize the addNotes() function
})

router.delete("/notes/:id", (req, res) => {
    // this is the delete route where you will
    store
        .removeNote(req.params.id)
        .then(() => res.json({ok:true}))
        .catch(err => res.status(500).json(err))
    // utilize the removeNote() function
});

 