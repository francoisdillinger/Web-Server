var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = 3000;



app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('All about us!');
});

app.use(express.static(__dirname + '/public'));

// console.log(__dirname);
app.listen(PORT, function(){
    console.log("I'm running bro! On Port: " + PORT + '!');
});