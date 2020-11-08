const path = require("path");
const router = require("express").Router();

//Notes Route
router.get("/notes", (req, res) => {
    // here you will render the notes HTML page
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})


//All other Routes
router.get("*", (req, res) => {
    // this is the default route where you will render index.html
}) 

module.exports = router; 