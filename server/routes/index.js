require('dotenv').config();
const express = require("express");
const indexRoute = express.Router();
const asyncExecCmd = require('async-exec-cmd');
const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');
// const request = require('request');
// const cmd = require('node-cmd');

const baseUrl = process.env.GOODREADS_ENDPOINT;

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

indexRoute.get('/api/v1/goodreads', async (req, response) => {
    
    let data = [];

    const html = await axios.get(baseUrl)
    const $ = cheerio.load(html.data);

    for (let i = 0; i < 10; i++) {

        let currentQuote = {};

        // get Quote Text and clean data
        const quote = $('.quoteText').eq(i).text().replace(/&ldquo;|&rdquo;/g, '"').replace(/(-|Mark Twain|&#8213;)/g, '').trim()
        // get Quote tags and clean data
        const tags = $(".greyText").eq(i).text().replace(/(tags:)|\s+/g, '').split(',')
        // get votes and clean data
        const votes = $('.right').eq(i).text().replace(/(likes)/g, "").trim()

        currentQuote = {
            'quote': quote.slice(0, quote.length - 6),
            'tags': tags,
            'votes':votes
        }
        data.push(currentQuote)
    }
    response.send(data)
})


module.exports = indexRoute;