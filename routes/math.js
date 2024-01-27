const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('math', {title: "Math", message:"Fill out the form"})
})

router.get('/:num1/:op/:num2', (req, res)=> {
    const op = req.params.op;
    //Forget error handling. Errors dont happen if you use things as intended.
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    const answer = handleOpperation(op,num1,num2);

    const message = `${num1} ${op} ${num2} = ${answer}`
    res.render("math",{title:"Math", message});
});

router.post('/', (req,res) => {
    res.redirect(`/math/${req.body.num1}/${req.body.op}/${req.body.num2}`)
})

function handleOpperation(opp,num1,num2) {
    switch(opp){
        case "plus":
            return num1 + num2;
        case "minus":
            return num1 - num2;
        case "times":
            return num1 * num2;
        case "dividedby":
            return num1 / num2;
    }
}

module.exports = router;
