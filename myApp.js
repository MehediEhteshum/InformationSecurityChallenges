const express = require('express');
const helmet = require('helmet');
const app = express();

// helps you secure your Express apps by setting various HTTP headers.
// app.use(helmet());
// Hide Potentially Dangerous Information. remove the X-Powered-By header.
app.use(helmet.hidePoweredBy());
// This middleware sets the X-Frame-Options header. It restricts who can put your site in a frame. Mitigate the Risk of Clickjacking.
app.use(helmet.frameguard({action: 'deny'}));
// Mitigate the Risk of Cross Site Scripting (XSS) Attacks. The browser detects a potential injected script using a heuristic filter. If the header is enabled, the browser changes the script code, neutralizing it. It still has limited support.
app.use(helmet.xssFilter());
// Avoid Inferring the Response MIME Type with helmet.noSniff(). Browsers can use content or MIME sniffing to override response Content-Type headers to guess and process the data using an implicit content type. While this can be convenient in some scenarios, it can also lead to some dangerous attacks. This middleware sets the X-Content-Type-Options header to nosniff, instructing the browser to not bypass the provided Content-Type.
app.use(helmet.noSniff());


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
