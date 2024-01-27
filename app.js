//TODO Break code into smaller files
const express = require('express');
const app = express();

const greetRoute = require("./routes/greet");
const mathRoute = require("./routes/math");
const pandorasboxRoute = require("./routes/pandorasbox");

const PORT = process.env.PORT || "3000";

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.use('/greet', greetRoute);
app.use('/math', mathRoute);
app.use('/pandorasbox', pandorasboxRoute);

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
