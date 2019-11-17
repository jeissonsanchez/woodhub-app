require('dotenv').config({
    path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
  });

var express = require('./config/express.js');

var app = express();

app.listen(process.env.PORT || config.port , function(){
    console.log('Sevidor ejecutándose en http://localhost:'+ process.env.PORT);
});

module.exports = app;

// require('dotenv').config({
//   path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
// });

// const express = require('express');
// const path = require('path');

// const staticFolder = process.env.NODE_ENV === 'development' ? 'public' : 'dist';
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, staticFolder)));

// // app.use('/', indexRouter);
// require('./app/routes/woodhub.server.route.js')(app);
  
// app.use((req, res) => {
//     res.status(404).render('pages/404');
//     res.end();
// });

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

// app.listen(process.env.PORT || config.port , function(){
//     console.log('Sevidor ejecutándose en http://localhost:'+ process.env.PORT);
// });

// module.exports = app;