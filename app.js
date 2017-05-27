var secrets = require('./config/secrets.js');
// var request = require('request');

// set up server
var config = require('./config/config.js'), // import config variables
  port = process.env.PORT || config.port,   // set port from command line using 'env PORT=8000 npm start' || set the port from config file
  express = require('express'),             // use express as the framwork
  app = express(),                          // create the server using express
  path = require('path');                   // utility module (default node module from the gloabl node installation)

app.use(express.static(path.join(__dirname, 'public'))); // this middleware serves static files, such as .js, .img, .css files

// Initialize server
var server = app.listen(port, function () {
  console.log('Listening on port %d', server.address().port);
});

// Use '/' to go to index.html via static middleware

// THESE ARE OUR ROUTES
// Use '/test' to send "test" as a response.
app.get('/test', function (req, res) {
  res.send('tested');
});

app.get('/cats', function (req, res) {
  res.send("Cat's are kinda cool.");
});

// request.post(
//   {
//     form: {
//       client_id: secrets.clientID,
//       client_secret: secrets.clientSecret,
//       grant_type: 'authorization_code',
//       redirect_uri: 'http://' + req.headers.host,
//       code: req.query.code
//     },
//     url: 'https://api.instagram.com/oauth/access_token'
//   }
// )
