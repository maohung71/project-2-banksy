// import express from our dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path       = require('path');
const methodOverride = require('method-override');

// initialize the app
const app = express();


// middlewares
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


//templating engine to an Express app!
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;
// tell the app to listen on that particular port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//Our index route!
// app.get('/', (req, res) => {
//   res.send('Hello World from server.js!');
// });

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello world!' });
});



app.get('/', (req, res) => res.render('index', {
  message: 'Hello you!',
  subTitle: 'Welcome to the quote-sta-gram',
  quoteAuthors: []
}));

// import our quote routes & tell the app to use them
const banksyRouter = require('./routes/banksy_routes');
app.use('/index', banksyRouter);

// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
