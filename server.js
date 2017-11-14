let express = require('express');
let app = express();
let bodyParser = require('body-parser');
var url = require('url');
var https = require('https');

app.use(function (req, res, next) {
    req.name = 'test';
    next();
});

var url_parts;
// body parser input here

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/data', function (req, res) {
    console.log(req.body);
    url_parts = url.parse(req.body.url, true);
    let final = '';
    https.get(url_parts.href, im => {
        im.on('data', c => {
            console.log(c.toString())

            // ttrupkame

            final += (c.toString());
        })

        im.on('end', () => {
            debugger;
            parseData(final);
            // res.send(...nest0);
            res.end();
        })
        console.log('here');
    });

    // app.get(req.body.url, function (data) {
    //     let parsedData = data.filter(el => {
    //         debugger;
    //         // console.log("------------------------");
    //         // console.log("title      : " + el.filter("title").text());
    //         // console.log("link       : " + el.find("link").text());
    //         // console.log("description: " + el.find("description").text());
    //     })
    // })
    // parseData(req.body.url);
    // res.send('test');
    // res.status(200).end();
});

// app.get(url_parts.href, function (req, res) {
//     console.log(res);
// });

function parseData(data) {
    
    let parsedData = data.filter(el => {
        debugger;
        // console.log("------------------------");
        // console.log("title      : " + el.filter("title").text());
        // console.log("link       : " + el.find("link").text());
        // console.log("description: " + el.find("description").text());
    })
}

let port = process.env.port || 4200;
app.listen(port, function () {
    console.log('Server is listening on port: ', port);
});
