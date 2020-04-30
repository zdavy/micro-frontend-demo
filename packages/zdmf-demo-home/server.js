const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/zdmf-demo-home'));

app.get('/*', function(_, res) {

  res.sendFile(path.join(__dirname + '/dist/zdmf-demo-home/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
