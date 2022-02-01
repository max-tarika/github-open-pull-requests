const path = require('path');
const express = require('express');
require('dotenv').config();
const router = require('./routes.js');

// Create server
const app = express();

// Set the port to listen on
app.set('port', process.env.PORT || 3000);

app.use(express.json());

// Serve Up Static Files
app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(router);

app.listen(app.get('port'), () => {
  console.log('Listening on', app.get('port'));
});

module.exports = app;
