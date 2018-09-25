require('dotenv').config(); // loads the .env
const express = require('express');
const morgan = require('morgan');
const indexRoute = require('./routes/index');
const authRoute = require('./routes/auth');
const cors = require('cors')
const passportConfig = require('./passport');
const session = require('express-session');

// initialize app
const app = express();

// middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(session({
    secret: 'turple was here',
    resave: false,
    saveUninitialized: true
}))
app.use(passportConfig.initialize());
app.use(passportConfig.session());

// routes
app.use('/', indexRoute);
app.use('/auth', authRoute );


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`app is locked and loaded at port: ${PORT}`)
});

module.exports = app;