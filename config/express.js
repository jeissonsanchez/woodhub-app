require('dotenv').config({
    path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
});

var express = require('express'),
    path = require('path'), 
    bodyParser = require('body-parser');

module.exports = function () {

    var app = express();

    // Parsers
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));

    app.use(express.static(path.join(__dirname, '../dist/woodhub-app')));

    require('../app/routes/woodhub.server.route.js')(app);

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../dist/woodhub-app/index.html'));
    });

    return app;
}