const express = require("express");
const indexRoute = express.Router();
const request = require('request');

indexRoute.get("/test", function (req, res) {
    res.status(200).send({"item":"landing page"});
});

indexRoute.get('/api/v1/facebook', function (req, res) {
    
})

indexRoute.post('/api/v1/goodreads', function (req, res) {
    
})


module.exports = indexRoute;