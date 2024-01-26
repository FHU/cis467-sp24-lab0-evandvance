//TODO Break code into smaller files
const express = require('express');
const app = express();

const PORT = process.env.PORT || "3000";

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})


// http://localhost:3000/greet?name=kaylee&dob=2002
app.get('/greet', (req, res)=> {
    //Oopie no error handling...
    const dob = parseInt(req.query.dob);
    const name = req.query.name;

    const year = new Date().getFullYear();

    const age1 = year - dob-1; 
    const age2 = year - dob;

    const message = `Hello ${name}! You are ${age1} or ${age2} years old.`
    res.render('greeting', {title:"Greeting", message});
});

app.get('/math/:num1/:op/:num2', (req, res)=> {
    const opp = req.params.op;
    //Forget error handling. Errors dont happen if you use things as intended.
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    const answer = handleOpperation(opp,num1,num2);

    const message = `${num1} ${opp} ${num2} = ${answer}`
    res.render("math",{title:"Math", message});
});

app.get('/pandorasbox', (req, res)=> {

    // do the work
    const message = "DAD JOKE";

    res.render('pandorasbox', {title: "Pandora's Box", message} );

});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));


const handleOpperation = (opp,num1,num2) => {
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