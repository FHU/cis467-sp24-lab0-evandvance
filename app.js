const express = require('express');
const app = express();

const PORT = process.env.PORT || "3000";

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})


// http://localhost:3000/greet?name=kaylee&dob=2002
app.get('/greet', (req, res)=> {
    const query = req.query;
    res.render('greeting', {title:"Greeting", message:query});
});

app.get('/math/:num1/:op/:num2', (req, res)=> {
    const opp = req.params.op;
    //Forget error handling. Errors dont happen if you use things as intended.
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    res.render("math",{title:"Math", message:"Test"});
});

app.get('/pandorasbox', (req, res)=> {

    // do the work
    const message = "DAD JOKE";

    res.render('pandorasbox', {title: "Pandora's Box", message} );

});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
