//Require NPM packages
const express = require('express');
const logger = require('morgan');
const app = express();
const routes = require('./routes/index')

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));

//Register Middleware
app.use(express.json());

app.use(express.static(__dirname + '/client/build'))

app.use('/api/', routes);


// Routes:
app.get('/*', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

// CONNECT MONGOOSE TO "bespoke"
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log('App is up and running on port ' + PORT);
});