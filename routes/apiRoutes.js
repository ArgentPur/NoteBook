const router = require("express").Router();
const store = require("../db/store")


router.get("/notes", (req, res) => {
    store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
    // Utilize the getNMotes() function
})

router.post("/notes/:id", (req, res) => {
    // this is the POST route where your will you 
    store
    .addNote(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
    
    // Utilize the addNotes() function
})

router.delete("/notes/:id", (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ok:true}))
        .catch(err => res.status(500).json(err))
    // Utilize the removeNote() function
});

 