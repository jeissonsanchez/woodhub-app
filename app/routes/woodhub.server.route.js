module.exports = function(app) {
    var woodhub = require('../controllers/woodhub.server.controller');

    app.route('/ruta')
        .post( woodhub.controller);
}