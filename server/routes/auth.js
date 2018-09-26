require('dotenv').config();
const express = require('express');
const passport = require('../passport');
const router = express.Router();

// This route checks for the existence of a user in the session
router.get('/user', (req, res, next) => {
    console.log(req.params)
    // res.send({'user': req.user})
});

router.get('/login', passport.authenticate('goodreads',
    {
        session: true,
        successRedirect: process.env.FRONTEND_URL + '/goodreads',
        failureRedirect: process.env.FRONTEND_URL + '/goodreads',
        failureFlash: true,
        successFlash: 'Welcome!'
    }
)
);

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect(process.env.FRONTEND_URL + '/');
});

router.get('/return', passport.authenticate('goodreads', { failureRedirect: `${process.env.FRONTEND_URL}/goodreads` }),
    function (req, res) {
        res.redirect(`${process.env.FRONTEND_URL}/goodreads/${req.query.authorize}`);
    });

module.exports = router;