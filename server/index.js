const path = require('path');
const express = require('express');
const router = require('./routes.js');

// Create server
const app = express();

// Set the port to listen on
app.set('port', 3000);

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(router);

app.listen(app.get('port'), () => {
  console.log('Listening on', app.get('port'));
});

module.exports = app;
