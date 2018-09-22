const express = require("express");
const indexRoute = express.Router();
const request = require('request');
const cmd = require('node-cmd');
const asyncExecCmd = require('async-exec-cmd');
const fs = require('fs');

indexRoute.get("/test", function (req, res) {
    res.status(200).send({ "item": "landing page" });
});

indexRoute.get('/api/v1/facebook', async (req, response) => {
    asyncExecCmd('python3 ./scripts/get_facebook_posts.py', function __cb(err, res, code, buffer) {
        if (err) {
            console.error(err, code)
            return
        }
        const readData = fs.readFileSync('facebook_posts.txt', 'utf8', () => { return 'read populated file' })
        const parsed = JSON.parse(readData)
        response.send(parsed)
    })
})

indexRoute.post('/api/v1/goodreads', function (req, res) {

})


module.exports = indexRoute;