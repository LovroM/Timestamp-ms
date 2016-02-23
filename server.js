var express = require('express');
var app = express();
var path = require("path");

app.get('/', function(req, res) {
    
    res.sendfile(path.join(__dirname, '/client', '/index.html'));

});



var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});