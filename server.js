var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('unirest');
var app     = express();


var unirest = require('unirest');








app.get('/', function(req, res) {

    var request = unirest.post('https://app.yad2.co.il/api/v1.0/feed/feed.php')
        .send({
            "cat": 1,
            "subcat": "1",
            "fromYear": "2012",
            "fromPrice": "15000",
            "toPrice": "45000",
            "toKm": "110000",
            "sort": "3",
            "page": "1",
            "location_type": "3",
            "gearBox": "1",
            "feedtype": "search"
        })
        .end(function(response) {
            var body = response.body;
            console.log(("got response: " + response.raw_body));
            console.log(":)");
            res.send(response.raw_body);

        });



});

app.listen('8081');

console.log('Magic happens on port 8081');

module.exports = app;