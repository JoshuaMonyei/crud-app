const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const dbSetup = require('./db/server')
const routes = require("./routes/interns")

// Initialize Express middleware
app.use(express.json({extended: false}));

// setting-up mongoose
dbSetup();

app.use(routes);

const {PORT} = process.env
const port = PORT || 4000;

app.listen(port, () => console.log(`Server up and running at ${port}`))

