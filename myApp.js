const express = require('express');
const helmet = require('helmet');
const app = express();

// helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());
// Hide Potentially Dangerous Information. remove the X-Powered-By header.
app.use(helmet.hidePoweredBy());
// This middleware sets the X-Frame-Options header. It restricts who can put your site in a frame. Mitigate the Risk of Clickjacking.
app.use(helmet.frameguard({action: 'deny'}));














































module.exports = app;
var api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
