var express = require('express');
var app = express();
// var path = require('path');

app.use(express.static('app'));
// app.use('bower_components',  express.static( path.join(__dirname, '/bower_components')));
// app.use(express.static('bower_components'));

app.set('port', process.env.PORT || 7000);
app.listen(process.env.PORT || 7000, function () {
	    console.log('Express server listening on port ' + app.get('port'));
});

