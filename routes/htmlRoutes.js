const path = require("path");
const router = require("express").Router();

//Notes Route
router.get("/notes", (req, res) => {
    // Renders the notes HTML page
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


//All other Routes
router.get("*", (req, res) => {
    // Default route to render index.html
    res.sendFile(path.join(__dirname, "../public/index.html"))
}); 

module.exports = router; 