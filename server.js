var express = require('express'), app = express();

app.use(express.static('app'));
app.set('port', process.env.PORT || 7000);
app.listen(process.env.PORT || 5000, function () {
	    console.log('Express server listening on port ' + app.get('port'));
});

