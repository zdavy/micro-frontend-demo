const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/consumer-two'));

app.get('/*', function(_, res) {

  res.sendFile(path.join(__dirname + '/dist/consumer-two/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
