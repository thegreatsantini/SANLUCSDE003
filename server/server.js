require('dotenv').config(); // loads the .env
const express = require('express');
const morgan = require('morgan');
const indexRoute = require('./routes/index');
const cors = require('cors')
// initialize app
const app = express();

app.use(morgan('tiny'))
app.use(cors());

// routes
app.use('/', indexRoute)


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`app is locked and loaded at port: ${PORT}`)
});

module.exports = app;