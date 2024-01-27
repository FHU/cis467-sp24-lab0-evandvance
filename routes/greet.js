const express = require("express");
const router = express.Router();

router.get('/', (req, res)=> {
    //Oopie no error handling...
    const dob = parseInt(req.query.dob);
    const name = req.query.name;

    const year = new Date().getFullYear();

    const age1 = year - dob-1; 
    const age2 = year - dob;

    const message = isEmpty(req.query) ? "Fill out the Form!" : `Hello ${name}! You are ${age1} or ${age2} years old.`
    res.render('greeting', {title: "Greeting", message});
});

router.post('/', (req, res) => {
    res.redirect(`/greet?name=${req.body.name}&dob=${req.body.dob}`)
});

//Rust is cool because I could use impl on the Obj struct and add this and then use dot notation
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

module.exports = router;
