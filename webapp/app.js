var express = require('express');
var path = require('path');

var app = express();

app.use('/view', express.static('./view'));
app.use('/controller', express.static('./controller'));
app.use(express.static('.'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function() {
    console.log('Express server running on port 3000');
});
