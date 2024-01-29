const express = require("express");
const router = express.Router();
const facts = require("./facts.json")

router.get('/', (req, res)=> {
    const message = facts[Math.floor(Math.random() * facts.length)].fact;

    res.render('pandorasbox', {title: "Pandora's Box", message} );

});

module.exports = router;
