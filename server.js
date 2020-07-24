const express = require('express');
const path = require('path');

const mongoose = require('mongoose');

// Connect to the database
const mongoDbUrl = 'mongodb://localhost/';
const dbName = 'moorings';
mongoose.connect(mongoDbUrl + dbName, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

// Check Connection
database.once('open', () => {
  console.log('Database connected successfully');
});

// Check for DB Errors
database.on('error', (error) => {
  console.log(error);
});

const routes = require('./routes');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '/static')));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}/api`);
});

