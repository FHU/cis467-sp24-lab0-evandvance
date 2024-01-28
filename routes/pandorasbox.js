const express = require("express");
const router = express.Router();


router.get('/', (req, res)=> {

    // do the work
    const message = "DAD JOKE";

    res.render('pandorasbox', {title: "Pandora's Box", message} );

});

module.exports = router;