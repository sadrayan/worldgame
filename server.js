var express = require('express');
var http = require('http');
const fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use('/health', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
    res.end("Up and running!\n ");
});

app.get('/tournaments/xbox', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
    const dataPath = './data/xbox.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err)
            throw err;

        console.log(data);
        res.end(data);
    });
})

app.get('/tournaments/ps4', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
    const dataPath = './data/ps4.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err)
            throw err;

        console.log(data);
        res.end(data);
    });
})

app.get('/tournaments/steam', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
    const dataPath = './data/steam.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err)
            throw err;

        console.log(data);
        res.end(data);
    });
})


app.get('/usersList', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
    const dataPath = './data/users.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err)
            throw err;

        console.log(data);
        res.end(data);
    });

})

app.get('/user/:id', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
    user = {}
    const dataPath = './data/users.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err)
            throw err;
        JSON.parse(data).forEach(element => {
            if (element.id == req.params.id)
                user = element
        });
        res.end(JSON.stringify(user));
    });

})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})