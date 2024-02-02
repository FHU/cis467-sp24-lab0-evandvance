const express = require("express");
const router = express.Router();
const facts = require("./facts.json")

router.get('/', async (req, res) => {

    const selector = Math.floor(Math.random() * 2);
    const messages = [getDadJoke, getRandomFact];

    res.render('pandorasbox', {title: "Pandora's Box", message: await messages[selector]()} );
});

async function getDadJoke() {

    let joke = "";

    await fetch("https://icanhazdadjoke.com/", {
            headers: {"Accept": "application/json"}
        })
        .then(res => res.json())
        .then(data => joke = data);

    return joke["joke"];
};

async function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)].fact
}
module.exports = router;
